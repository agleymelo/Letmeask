import { Fragment, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Modal from 'react-modal'

import emptyQuestionsImg from '../../assets/images/empty-questions.svg'
import closeImg from '../../assets/images/close.svg'
import trashImg from '../../assets/images/trash.svg'

import { Button } from '../../components/Button'
import { RoomCode } from '../../components/RoomCode'
import { Question } from '../../components/Question'
import { Header } from '../../components/Header'

import { useRoom } from '../../hooks/useRoom'
import { useTheme } from '../../hooks/useTheme'

import { database } from '../../services/firebase'

import {
  Container,
  Main,
  RoomTitle,
  QuestionList,
  EmptyQuestions,
  ContainerModal,
  ContentMain,
  Buttons
} from './styles'

type RoomParams = {
  room_id: string
}

export function AdminRoom(): JSX.Element {
  const params = useParams<RoomParams>()
  const roomId = params.room_id

  const history = useHistory()

  const { title, questions, isAuthor, roomHasClosed } = useRoom(roomId)

  const { theme } = useTheme()

  const [questionIdModalOpen, setQuestionIdModalOpen] = useState<
    string | undefined
  >(undefined)

  const [endedRoomModal, setEndedRoomModal] = useState(false)

  const styleModal = {
    content: {
      minWidth: '320px',
      maxWidth: '590px',
      width: '100%',
      height: '424px',
      margin: 'auto',
      padding: '8px',
      borderRadius: '8px',
      background: `${theme.background?.primary}`,
      border: '0'
    },
    overlay: {
      background: 'rgba(0,0,0,0.4)'
    }
  }

  useEffect(() => {
    const hasLoadedRoom = isAuthor !== undefined && roomHasClosed !== undefined

    if (roomHasClosed && hasLoadedRoom) {
      history.push('/')
      return
    }

    if (!isAuthor && hasLoadedRoom) {
      toast.error('You are not the creator of the room.')
      history.push(`/rooms/${roomId}`)
    }
  }, [history, isAuthor, roomHasClosed, roomId])

  useEffect(() => {
    document.title = `Letmeask - Sala ${title}`
  }, [title])

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })

    history.push('/')

    toast.success('Room closed successfully')
  }

  async function handleDeleteQuestion(questionId: string | undefined) {
    setQuestionIdModalOpen(undefined)

    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()

    toast.success('Question deleted successfully')
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true
    })
  }

  return (
    <Container>
      <Header>
        <RoomCode code={roomId} />

        <Button isOutlined onClick={() => setEndedRoomModal(true)}>
          Encerar sala
        </Button>
      </Header>

      <Main>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} Pergunta(s)</span>}
        </RoomTitle>

        <QuestionList>
          {questions.length > 0 ? (
            questions.map(question => {
              return (
                <Fragment key={question.id}>
                  <Question
                    content={question.content}
                    author={question.author}
                    isAnswered={question.isAnswered}
                    isHighlighted={question.isHighlighted}
                  >
                    {!question.isAnswered && (
                      <>
                        <button
                          className="question-highlight-button"
                          type="button"
                          onClick={() =>
                            handleCheckQuestionAsAnswered(question.id)
                          }
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="12.0003"
                              cy="11.9998"
                              r="9.00375"
                              stroke="#737380"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193"
                              stroke="#737380"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>

                        <button
                          className="question-highlight-button"
                          type="button"
                          onClick={() => handleHighlightQuestion(question.id)}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 17.9999H18C19.657 17.9999 21 16.6569 21 14.9999V6.99988C21 5.34288 19.657 3.99988 18 3.99988H6C4.343 3.99988 3 5.34288 3 6.99988V14.9999C3 16.6569 4.343 17.9999 6 17.9999H7.5V20.9999L12 17.9999Z"
                              stroke="#737380"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </>
                    )}

                    <button
                      className="delete-button"
                      type="button"
                      onClick={() => setQuestionIdModalOpen(question.id)}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 5.99988H5H21"
                          stroke="#737380"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z"
                          stroke="#737380"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </Question>

                  {/* Modal Delete Question */}
                  <Modal
                    isOpen={questionIdModalOpen === question.id}
                    onRequestClose={() => setQuestionIdModalOpen(undefined)}
                    style={styleModal}
                  >
                    <ContainerModal>
                      <ContentMain>
                        <img src={trashImg} alt="Icon de deletar" />

                        <div>
                          <h2>Excluir pergunta</h2>

                          <p>
                            Tem certeza que você deseja excluir esta pergunta?
                          </p>
                        </div>
                      </ContentMain>

                      <Buttons>
                        <Button
                          onClick={() => setQuestionIdModalOpen(undefined)}
                        >
                          Cancelar
                        </Button>
                        <Button
                          onClick={() =>
                            handleDeleteQuestion(questionIdModalOpen)
                          }
                        >
                          Sim, Excluir
                        </Button>
                      </Buttons>
                    </ContainerModal>
                  </Modal>
                </Fragment>
              )
            })
          ) : (
            <EmptyQuestions>
              <img src={emptyQuestionsImg} alt="Sem perguntas" />

              <strong>Nenhuma pergunta por aqui...</strong>

              <p>
                Envie o código desta sala para seus amigos e comece a responder
                perguntas!
              </p>
            </EmptyQuestions>
          )}
        </QuestionList>
      </Main>

      {/* Modal Ended Room */}
      <Modal
        isOpen={endedRoomModal}
        onRequestClose={() => setEndedRoomModal(false)}
        style={styleModal}
      >
        <ContainerModal>
          <ContentMain>
            <img src={closeImg} alt="Icon de Encerar a sala" />

            <div>
              <h2>Encerar Sala</h2>

              <p>Tem certeza que você deseja encerrar esta sala?</p>
            </div>
          </ContentMain>

          <Buttons>
            <Button onClick={() => setEndedRoomModal(false)}>Cancelar</Button>
            <Button onClick={handleEndRoom}>Sim, Encerar</Button>
          </Buttons>
        </ContainerModal>
      </Modal>
    </Container>
  )
}
