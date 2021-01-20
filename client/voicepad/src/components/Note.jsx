import React, { useRef } from "react";
import { Link } from "react-router-dom";

import Modal from "./modal";

import { truncate, DeleteUserNote } from "../Hooks/noteHook";
const Note = ({ title, id }) => {
  const modalRef = useRef();
  const openModal = () => {
    modalRef.current.openModall();
  };

  return (
    <>
      <Modal ref={modalRef} title={title} id={id} />
      <div className="speech-wrapper">
        <i
          onClick={() => DeleteUserNote(id)}
          id="delete-btn"
          className="fas fa-trash-alt"
        ></i>
        <Link to="#" onClick={openModal}>
          <h3 className="text">{truncate(title, 100)}</h3>
        </Link>
      </div>
    </>
  );
};

export default Note;
