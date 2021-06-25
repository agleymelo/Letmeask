import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import logoDarkImg from "../../assets/images/logo-dark.svg";

import { Button } from "../../components/Button";
import { useAuth } from "../../context/Auth";

import { database } from "../../services/firebase";
import { useTheme } from "../../hooks/useTheme";

import {
  Container,
  Aside,
  Main,
  MainContent,
  MobileContent,
  Form,
} from "./styles";

export function NewRoom() {
  const [newRoom, setNewRoom] = useState("");

  const { user } = useAuth();
  const { theme } = useTheme();

  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/admin/rooms/${firebaseRoom.key}`);
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
            src={`${theme.title === "light" ? logoImg : logoDarkImg}`}
            alt="Letmeask"
          />

          <MobileContent>
            <strong>Crie salas de Q&amp;A ao-vivo</strong>
            <p>Tire as dúvidas da sua audiência em tempo-real</p>
          </MobileContent>

          <h2>Criar uma nova sala</h2>

          <Form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
              onChange={(event) => setNewRoom(event.target.value)}
            />
            <Button type="submit">Criar sala</Button>
          </Form>

          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </MainContent>
      </Main>
    </Container>
  );
}
