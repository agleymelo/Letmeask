import { useState } from "react";

export function useModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function setModalOpen() {
    setModalIsOpen(true);
  }

  function setModalClose() {
    setModalIsOpen(false);
  }

  return {
    modalIsOpen,
    setModalOpen,
    setModalClose,
  };
}
