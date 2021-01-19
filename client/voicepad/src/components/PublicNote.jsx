import React from "react";
import { truncate, DeletePublicNote } from "../Hooks/noteHook";
const PublicNote = ({ publicUser, setNote }) => {
  return (
    <>
      <div className="note-wrapper-text">
        <i
          onClick={() => DeletePublicNote(setNote)}
          id="delete-btn"
          className="fas fa-trash-alt"
        ></i>
        <h3 className="text">{truncate(publicUser, 100)}</h3>
      </div>
    </>
  );
};

export default PublicNote;
