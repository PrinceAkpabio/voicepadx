import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Modal from "./modal";
// import { response } from "express";
const Note = ({ title, id }) => {
  const modalRef = useRef();
  const openModal = () => {
    modalRef.current.openModall();
  };

  // DELETE NOTE
  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/notes/note/${id}`)
      .then((response) => alert(response.data));
    window.location.reload(true);
  };
  return (
    <>
      <Modal ref={modalRef} title={title} id={id} />
      <div className="speech-wrapper">
        <i
          onClick={handleDelete}
          id="delete-btn"
          className="fas fa-trash-alt"
        ></i>
        <Link to="#" onClick={openModal}>
          <h3 className="text">{title}</h3>
        </Link>
      </div>
    </>
  );
};

export default Note;
