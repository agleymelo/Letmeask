import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import logoImg from "../../assets/images/logo.svg";
import closeImg from "../../assets/images/close.svg";
import trashImg from "../../assets/images/trash.svg";
import deleteImg from "../../assets/images/delete.svg";

import { Button } from "../../components/Button";
import { RoomCode } from "../../components/RoomCode";
import { Question } from "../../components/Question";
import { Modal } from "../../components/Modal";

import { useRoom } from "../../hooks/useRoom";
import { useModal } from "../../hooks/useModal";

import { database } from "../../services/firebase";

import {
  Container,
  Header,
  HeaderContent,
  Main,
  RoomTitle,
  QuestionList,
} from "./styles";

type RoomParams = {
  room_id: string;
};

type SelectQuestion = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.room_id;

  const history = useHistory();

  const { title, questions } = useRoom(roomId);
  const { modalIsOpen, setModalOpen, setModalClose } = useModal();

  const {
    modalIsOpen: modalIsOpenDelete,
    setModalOpen: setModalOpenDelete,
    setModalClose: setModalCloseDelete,
  } = useModal();

  const [selectQuestion, setSelectionQuestion] = useState<
    SelectQuestion | undefined
  >(undefined);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    setModalClose();

    history.push("/");

    toast.success("Room closed successfully");
  }

  async function handleDeleteQuestion(questionId: string | undefined) {
    if (questionId === undefined) {
      return setModalCloseDelete();
    }

    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();

    console.log(questionId);

    setModalCloseDelete();

    setSelectionQuestion(undefined);

    toast.success("Question deleted successfully");
  }

  function selectQuestionForDelete(question: any) {
    setSelectionQuestion(question);

    setModalOpenDelete();
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Letmeask" />

          <div>
            <RoomCode code={roomId} />

            <Button isOutlined onClick={setModalOpen}>
              Encerar sala
            </Button>

            <Modal
              isModal={modalIsOpen}
              img={closeImg}
              title="Encerrar sala"
              subTitle="Tem certeza que você deseja encerrar esta sala?"
            >
              <Button onClick={setModalClose}>Cancelar</Button>
              <Button onClick={handleEndRoom}>Sim, encerar</Button>
            </Modal>
          </div>
        </HeaderContent>
      </Header>

      <Main>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} Pergunta(s)</span>}
        </RoomTitle>

        <QuestionList>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                  key={question.id}
                  type="button"
                  onClick={() => selectQuestionForDelete(question)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            );
          })}
        </QuestionList>

        {/* Modal */}
        <Modal
          isModal={modalIsOpenDelete}
          img={trashImg}
          title="Excluir pergunta"
          subTitle="Tem certeza que você deseja excluir esta pergunta?"
        >
          <Button onClick={setModalCloseDelete}>Cancelar</Button>
          <Button onClick={() => handleDeleteQuestion(selectQuestion?.id)}>
            Sim, excluir
          </Button>
        </Modal>
      </Main>
    </Container>
  );
}
