import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import toast from 'react-hot-toast'

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import logoDarkImg from '../../assets/images/logo-dark.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

import { Button } from '../../components/Button'
import { useAuth } from '../../context/Auth'
import { database } from '../../services/firebase'
import { useTheme } from '../../hooks/useTheme'

import {
  Container,
  Aside,
  Main,
  MainContent,
  MobileContent,
  ButtonCreateRoom,
  Separator,
  Form
} from './styles'

export function Home(): JSX.Element {
  const [roomCode, setRoomCode] = useState('')

  const history = useHistory()

  const { user, signInWithGoogle } = useAuth()

  const { theme } = useTheme()

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      toast.error('Room does not exists.')
      return
    }

    if (roomRef.val().endedAt) {
      toast.error('Room already closed.')
      return
    }

    toast.success('Entering the room...')

    history.push(`/rooms/${roomCode}`)
  }

  return (
    <Container>
      <Aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </Aside>

      <Main>
        <MainContent>
          <img
            src={`${theme.title === 'light' ? logoImg : logoDarkImg}`}
            alt="Letmeask"
          />

          <MobileContent>
            <strong>Crie salas de Q&amp;A ao-vivo</strong>
            <p>Tire as dúvidas da sua audiência em tempo-real</p>
          </MobileContent>

          <ButtonCreateRoom onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Icone do Google" />
            Crie sua sala com o Google
          </ButtonCreateRoom>

          <Separator>ou entre em uma sala</Separator>

          <Form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={event => setRoomCode(event.target.value)}
            />
            <Button type="submit">Entrar na sala</Button>
          </Form>
        </MainContent>
      </Main>
    </Container>
  )
}
