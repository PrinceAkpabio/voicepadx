import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Modal from "./modal";
// import { response } from "express";
const Note = ({ title, id, fetchUser }) => {
  const modalRef = useRef();
  const openModal = () => {
    modalRef.current.openModall();
  };

  // DELETE NOTE
  const handleDelete = async () => {
    await axios
      .delete(`/notes/note/${id}`)
      .then((response) => alert(response.data));
    await fetchUser();
  };

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }
  return (
    <>
      <Modal fetchUser={fetchUser} ref={modalRef} title={title} id={id} />
      <div className="speech-wrapper">
        <i
          onClick={handleDelete}
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
