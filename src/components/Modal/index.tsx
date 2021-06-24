import { ReactNode } from "react";
import ReactModal from "react-modal";

import { Container, ContentMain, Buttons } from "./styles";

interface ModalProps {
  children: ReactNode;
  isModal: boolean;
  title: string;
  subTitle?: string;
  img?: string;
}

export function Modal({ children, isModal, title, subTitle, img }: ModalProps) {
  return (
    <ReactModal
      isOpen={isModal}
      style={{
        content: {
          width: "590px",
          height: "362px",
          margin: "auto",
          padding: "0 24px",
          borderRadius: "8px",
        },
        overlay: {
          background: "rgba(0,0,0,0.4)",
        },
      }}
    >
      <Container>
        <ContentMain>
          <img src={img} alt="Icon de deletar" />

          <div>
            <h2>{title}</h2>

            <p>{subTitle}</p>
          </div>
        </ContentMain>

        <Buttons>{children}</Buttons>
      </Container>
    </ReactModal>
  );
}
