import React from "react";
import { Link } from "react-router-dom";

// import Modal from "./modal";

const Note = ({ title, id, publicUser, setNote }) => {
  // const modalRef = useRef();
  // const openModal = () => {
  //   modalRef.current.openModall();
  // };

  // DELETE NOTE
  const handleDelete = () => {
    localStorage.removeItem("public-user");
    setNote("");
  };
  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }
  return (
    <>
      {/* <Modal ref={modalRef} title={title} id={id} /> */}
      <div className="note-wrapper-text">
        <i
          onClick={handleDelete}
          id="delete-btn"
          className="fas fa-trash-alt"
        ></i>
        <Link to="#">
          <h3 className="text">{truncate(publicUser, 100)}</h3>
        </Link>
      </div>
    </>
  );
};

export default Note;
