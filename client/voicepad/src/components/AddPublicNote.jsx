import React, { useState, useEffect } from "react";

import PublicNote from "./PublicNote";

import useSound from "use-sound";
import Chime from "../Assets/chime.wav";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const AddPublicNote = ({ id }) => {
  const [currentText, setCurrentText] = useState("");
  const [PublicUser, setPublicUser] = useState("");
  const [copy, setCopySuccess] = useState("Copy");
  const { transcript, resetTranscript } = useSpeechRecognition;

  useEffect(() => {
    const publicUser = localStorage.getItem("public-user");
    console.log(publicUser);
    setPublicUser(publicUser);
  }, []);

  // CHANGE COPY SPAN TEXT
  useEffect(() => {
    const copyTimer = setTimeout(() => {
      if (copy === "Copied") {
        setCopySuccess("Copy");
      }
    }, 2000);
    console.log("ID: ", id);
    return () => clearTimeout(copyTimer);
  }, [copy, id]);

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
    // console.log(currentText);
    //   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    //    return null
    //  }
  };

  // MAKE TEXT FEILD EDITABLE
  const handleChange = (e) => {
    e.preventDefault();
    setCurrentText(e.target.value);
  };

  // Submit Note
  const handleSumbit = () => {
    localStorage.setItem("public-user", [currentText]);
    const publicUser = localStorage.getItem("public-user");
    console.log(publicUser);
    setPublicUser(publicUser);
    setCurrentText("");
  };

  return (
    <div className="noteContainer">
      <div className="noteTitle">
        <h2 className="title">Add a new note by writing in the text area</h2>

        <span className="copy-container">
          <i onClick={handleCopy} id="copy" className="far fa-copy">
            <span className="tooltip">{copy}</span>
          </i>
        </span>
      </div>
      <div className="note-wrapper">
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
          onClick={handleSumbit}
          // className="fas fa-microphone"
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
