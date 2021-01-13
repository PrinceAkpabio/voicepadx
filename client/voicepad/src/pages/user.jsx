import React from 'react'
import { useParams } from 'react-router-dom'
import NotesList from '../components/NotesList'
const User = () => {
   
 return (
  <div>
   User Profile
   <NotesList /> 
  </div>
 )
}

export default User
