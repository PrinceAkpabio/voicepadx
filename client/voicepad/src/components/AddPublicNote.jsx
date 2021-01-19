import React, { useState, useEffect } from "react";

import PublicNote from "./PublicNote";

// import useSound from "use-sound";
// import Chime from "../Assets/chime.wav";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

import {
  AddNewPublicNote,
  handleChange,
  handleCopy,
  MountedCopyTimer,
} from "../Hooks/noteHook";

const AddPublicNote = ({ id }) => {
  const [currentText, setCurrentText] = useState("");
  const [PublicUser, setPublicUser] = useState("");
  const [copy, setCopySuccess] = useState("Copy");
  // const { transcript, resetTranscript } = useSpeechRecognition;

  useEffect(() => {
    const publicUser = localStorage.getItem("public-user");
    console.log(publicUser);
    setPublicUser(publicUser);
  }, []);

  // Change Copied Text
  MountedCopyTimer(copy, setCopySuccess);

  // SOUND FOR MICROPHONE
  // const [play] = useSound(Chime);

  return (
    <div className="noteContainer">
      <div className="noteTitle">
        <h2 className="title">Add a new note by writing in the text area</h2>

        <span className="copy-container">
          <i
            onClick={() => handleCopy(currentText, setCopySuccess)}
            id="copy"
            className="far fa-copy"
          >
            <span className="tooltip">{copy}</span>
          </i>
        </span>
      </div>
      <div className="note-wrapper">
        <textarea
          type="text"
          onChange={(e) => handleChange(e, setCurrentText)}
          className="text"
          value={currentText}
          rows="5"
        />
        {/* <i
          id="mic"
          onMouseDown={play}
          onClick={() => HandleSpeech(SpeechRecognition, transcript, setCurrentText)}
          className="fas fa-microphone-alt"
        ></i> */}
        <i
          id="mic"
          onClick={() =>
            AddNewPublicNote(currentText, setPublicUser, setCurrentText)
          }
        >
          SUBMIT
        </i>
      </div>
      {PublicUser ? (
        <PublicNote publicUser={PublicUser} setNote={setPublicUser} />
      ) : null}
    </div>
  );
};

export default AddPublicNote;
