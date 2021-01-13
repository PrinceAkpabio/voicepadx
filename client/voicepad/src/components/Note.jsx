import React, { useState, useEffect, useRef} from 'react';
import useSound from 'use-sound';
import Chime from '../Assets/chime.wav';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';


const Note = () => {
  const [currentText, setCurrentText] = useState('');
  const [copy, setCopySuccess] = useState('Copy');
  const { transcript, resetTranscript } = useSpeechRecognition;

 
  
  // AUTOSAVE FEATURE W/ SESSION STORAGE
  const textRef = useRef(null);
  const textField = textRef.current;
  console.log(textField);

  // useEffect(() => {
  //   if (sessionStorage.getItem('First')) {
  //     textField.value = sessionStorage.getItem('First');
  //   }
  //   // textField.addEventListener('change', () => {
  //   //   sessionStorage.setItem('First', textField.value)
  //   // })
  // }, [textField])

  // CHANGE COPY SPAN TEXT
  useEffect(() => {
    const copyTimer = setTimeout(() => {
      if (copy === 'Copied') {
        setCopySuccess('Copy')
        }
    }, 2000)
    return () => clearTimeout(copyTimer)
  }, [copy])

  // Session Storage
  useEffect(() => {
    sessionStorage.setItem('First', currentText)
    // setCurrentText(sessionStorage.getItem('First'))
    
    // return () => sessionStorage.clear();
    
  }, [currentText])
 

  // SOUND FOR MICROPHONE
const [play] = useSound(Chime);
  console.log(currentText);
// MAKE TEXT FEILD EDITABLE
  const handleChange = (e) => {
    e.preventDefault()
    setCurrentText(e.target.value)
  }

// COPY AND PASTE FEATURE
  const handleCopy = (e) => {
    const selection = currentText;
    const Copied = navigator.clipboard.writeText(selection)

    if (Copied) {
      setCopySuccess('Copied')
    }
  }
   // HANDLE SPEECH CONVERSION
  const HandleSpeech = async () => {
    await SpeechRecognition.startListening();
    const result = JSON.stringify(transcript)
    setCurrentText(result)
   console.log(currentText)
  //   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  //    return null
  //  }
  }
  return (
    <>
      <div className='speechTitle'>
      <h2 className='title'>Click the microphone and wait half a second before speaking: </h2>
      
      <span className='copy-container'
      >
      <i
        onClick={handleCopy}
        id='copy'
        className="far fa-copy" 
        >
          <span className='tooltip'>{copy}</span>
        </i>
      </span>
      </div>
      <div className='speech-wrapper'>
        
        <textarea
          ref={textRef}
          type="text"
          onChange={handleChange} className='text'
          value={currentText}
          rows='5'
        />
        <i
          id="mic"
          onMouseDown={play}
          onClick={HandleSpeech}
          className="fas fa-microphone-alt"
        ></i>

      </div>

    </>
  );
}

export default Note;
