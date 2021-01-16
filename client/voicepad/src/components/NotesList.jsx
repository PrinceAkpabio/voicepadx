import React, { useContext } from "react";

import Note from "./Note";

import { UserContext } from "../data-requests/usercontext";
import NewNote from "./NewNote";

const NotesList = () => {
  const { user, setUser } = useContext(UserContext);
  const notes = user.notes;
  console.log("NOTES: ", notes);

  return (
    <div className="notes container">
      <ul className="note-list">
        {notes.length > 0 && (
          <li className="speech">
            <NewNote id={user._id} />
          </li>
        )}

        {notes.length > 0 ? (
          notes.map((note) => (
            <li key={note._id} className="speech">
              <Note id={note._id} title={note.title} />
            </li>
          ))
        ) : (
          <li className="speech">
            <NewNote id={user._id} />
          </li>
        )}
      </ul>
    </div>
  );
};

export default NotesList;
