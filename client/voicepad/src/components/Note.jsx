import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";
const Note = ({ title }) => {
  const modalRef = useRef();
  const openModal = () => {
    modalRef.current.openModall();
  };
  return (
    <>
      <Modal ref={modalRef} title={title} />
      <div className="speech-wrapper">
        <Link to="#" onClick={openModal}>
          <h3 className="text">{title}</h3>
        </Link>
      </div>
    </>
  );
};

export default Note;
