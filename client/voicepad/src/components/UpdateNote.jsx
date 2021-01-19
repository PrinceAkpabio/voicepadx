import React, { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from "../data-requests/usercontext";

import axios from "axios";
import useSound from "use-sound";
import Chime from "../Assets/chime.wav";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const UpdateNote = ({ Title, Id, fetchUser, closeModal }) => {
  const { user, setUser } = useContext(UserContext);
  const [currentText, setCurrentText] = useState(Title);
  const [copy, setCopySuccess] = useState("Copy");
  const { transcript, resetTranscript } = useSpeechRecognition;

  // CHANGE COPY SPAN TEXT
  useEffect(() => {
    const copyTimer = setTimeout(() => {
      if (copy === "Copied") {
        setCopySuccess("Copy");
      }
    }, 2000);
    console.log("TITLE: ", Title, "ID: ", Id);
    return () => clearTimeout(copyTimer);
  }, [copy, setCurrentText, Title, Id]);

  // SOUND FOR MICROPHONE
  const [play] = useSound(Chime);

  // COPY AND PASTE FEATURE
  const handleCopy = (e) => {
    const selection = currentText;
    const Copied = navigator.clipboard.writeText(selection);

    if (Copied) {
      setCopySuccess("Copied");
    }
  };
  // HANDLE SPEECH CONVERSION
  const HandleSpeech = async () => {
    await SpeechRecognition.startListening();
    const result = JSON.stringify(transcript);
    setCurrentText(result);
    console.log(currentText);
    //   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    //    return null
    //  }
  };

  // MAKE TEXT FEILD EDITABLE
  const handleChange = (e) => {
    e.preventDefault();
    setCurrentText(e.target.value);
  };

  // Update Note
  const title = currentText;
  const id = Id;
  console.log(currentText);
  const handleSubmit = async () => {
    await axios.post(`/notes/note/${id}`, {
      title,
      id,
    });
    await fetchUser();
    await closeModal();
  };

  return (
    <>
      <div className="speechTitle">
        <h2 className="title">
          Click the microphone and wait half a second before speaking:{" "}
        </h2>

        <span className="copy-container">
          <i onClick={handleCopy} id="copy" className="far fa-copy">
            <span className="tooltip">{copy}</span>
          </i>
        </span>
      </div>
      <div className="speech-wrapper">
        <textarea
          type="text"
          onChange={handleChange}
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
          onClick={handleSubmit}
          // className="fas fa-microphone"
        >
          SUBMIT
        </i>
      </div>
    </>
  );
};

export default UpdateNote;
