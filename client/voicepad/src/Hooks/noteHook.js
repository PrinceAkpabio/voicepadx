import React from 'react';
import axios from "axios";
export function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
};
  export const handleChange = (e, setCurrentText) => {
    e.preventDefault();
    setCurrentText(e.target.value);
};
 export const handleCopy = ( currentText, setCopySuccess) => {
    const selection = currentText;
    const Copied = navigator.clipboard.writeText(selection);

    if (Copied) {
      setCopySuccess("Copied");
    }
};
export const MountedCopyTimer = (copy, setCopySuccess) => {
 React.useEffect(() => {
  const copyTimer = setTimeout(() => {
   if (copy === "Copied") {
    setCopySuccess("Copy");
   }
  }, 2000);
  return () => clearTimeout(copyTimer);
 }, [copy, setCopySuccess]);
};
 export const HandleSpeech = async (SpeechRecognition, transcript, setCurrentText) => {
    await SpeechRecognition.startListening();
    const result = JSON.stringify(transcript);
    setCurrentText(result);
    // console.log(currentText);
    //   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    //    return null
    //  }
};
 export const AddNewNote = async (title,id,setCurrentText, fetchUser) => {
    await axios
      .post(`/notes/add`, {
        title,
        id,
      })
      .then(async (response) => await alert(response.data));

    await setCurrentText("");

    await fetchUser();
};
  export const AddNewPublicNote = (currentText, setPublicUser, setCurrentText) => {
    localStorage.setItem("public-user", [currentText]);
    const publicUser = localStorage.getItem("public-user");
    console.log(publicUser);
    setPublicUser(publicUser);
    setCurrentText("");
};
  export const UpdateUserNote = async (title, id, fetchUser, closeModal) => {
    await axios.post(`/notes/note/${id}`, {
      title,
      id,
    });
    await fetchUser();
    await closeModal();
};
  export const DeleteUserNote = async (id, fetchUser) => {
    await axios
      .delete(`/notes/note/${id}`)
      .then((response) => alert(response.data));
    await fetchUser();
};
  export const DeletePublicNote = (setNote) => {
    localStorage.removeItem("public-user");
    setNote("");
  };