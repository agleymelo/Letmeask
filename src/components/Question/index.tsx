import { ReactNode } from "react";
import { Container, Footer, UserInfo, ContentIcon } from "./styles";

type QuestionProps = {
  children?: ReactNode;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
};

export function Question({ content, author, children }: QuestionProps) {
  return (
    <Container>
      <p>{content}</p>

      <Footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>

        <ContentIcon>{children}</ContentIcon>
      </Footer>
    </Container>
  );
}
