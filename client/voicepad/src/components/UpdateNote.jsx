import React, { useState } from "react";

// import useSound from "use-sound";
// import Chime from "../Assets/chime.wav";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

import {
  UpdateUserNote,
  handleChange,
  handleCopy,
  MountedCopyTimer,
} from "../Hooks/noteHook";

const UpdateNote = ({ Title, Id, fetchUser, closeModal }) => {
  const [currentText, setCurrentText] = useState(Title);
  const [copy, setCopySuccess] = useState("Copy");
  // const { transcript, resetTranscript } = useSpeechRecognition;

  // Change Copied Text
  MountedCopyTimer(copy, setCopySuccess);
  // SOUND FOR MICROPHONE
  // const [play] = useSound(Chime);

  // Update Note
  const title = currentText;
  const id = Id;
  console.log(currentText);

  return (
    <>
      <div className="speechTitle">
        <h2 className="title">
          Click the microphone and wait half a second before speaking:{" "}
        </h2>

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
      <div className="speech-wrapper">
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
          onClick={HandleSpeech}
          className="fas fa-microphone-alt"
        ></i> */}
        <i
          id="mic"
          onClick={() => UpdateUserNote(title, id, fetchUser, closeModal)}
        >
          SUBMIT
        </i>
      </div>
    </>
  );
};

export default UpdateNote;
