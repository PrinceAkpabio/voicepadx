import React, { useContext } from "react";

import Note from "./Note";
import Modal from "./modal";
import { UserContext } from "../data-requests/usercontext";

const NotesList = () => {
  const { user, setUser } = useContext(UserContext);
  const notes = user.notes;
  console.log("NOTES: ", notes);

  return (
    <div className="notes container">
      <ul className="note-list">
        {notes.length > 0 ? (
          notes.map((note) => (
            <li key={note._id} className="speech">
              <Note title={note.title} />
            </li>
          ))
        ) : (
          <li className="speech">Add New Speech</li>
        )}
      </ul>
    </div>
  );
};

export default NotesList;
