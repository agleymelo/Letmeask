import { useEffect, useState } from 'react'

import { useAuth } from '../context/Auth'
import { database } from '../services/firebase'

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string
      avatar: string
    }
    content: string
    isAnswered: boolean
    isHighlighted: boolean
    likes: Record<
      string,
      {
        authorId: string
      }
    >
  }
>

type QuestionType = {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  isAnswered: boolean
  isHighlighted: boolean
  likeCount: number
  likeId: string | undefined
}

type ReturnUseRoom = {
  questions: QuestionType[]
  title: string
  isAuthor: boolean | undefined
  roomHasClosed: boolean | undefined
}

export function useRoom(roomId: string): ReturnUseRoom {
  const { user } = useAuth()
  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [title, setTitle] = useState('')
  const [isAuthor, setIsAuthor] = useState<boolean | undefined>(undefined)
  const [roomHasClosed, setRoomHasClosed] = useState<boolean | undefined>(
    undefined
  )

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.on('value', room => {
      const databaseRoom = room.val()
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {}

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
            likeCount: Object.values(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(
              ([, like]) => like.authorId === user?.id
            )?.[0]
          }
        }
      )

      setTitle(databaseRoom.title)
      setQuestions(parsedQuestions)

      setIsAuthor(databaseRoom.authorId === user?.id)
      setRoomHasClosed(!!databaseRoom.endedAt)
    })

    return () => {
      roomRef.off('value')
    }
  }, [roomId, user?.id])

  return {
    questions,
    title,
    isAuthor,
    roomHasClosed
  }
}
