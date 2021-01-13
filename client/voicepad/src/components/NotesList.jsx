import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../data-requests/usercontext';
import Note from './Note';

const NotesList = () => {
 const { user, setUser } = useContext(UserContext);
 useEffect(() => {
  fetch('/get-notes').then(res => res.json()).then(data => setUser(data))
  return () => {

  };
 }, [setUser])
 return (
  <div className='notes container'>
   <ul className='notes-list'>
   {user.length > 0 && user.map(note => (
    <li
     className="speech"
    key={note._id}
    >
    <Note />
     { note.name}
     < p >
     {note.updatedAt }
    </p>
     <h3>
     {note.notes}
     </h3>
    </li>
   )

   )}
   </ul>
  </div>
 )
}

export default NotesList
