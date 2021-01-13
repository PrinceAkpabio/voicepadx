import React, {useEffect, useContext} from 'react'
import { UserContext, Users } from '../data-requests/usercontext';
import {useHistory} from 'react-router-dom'
import SignUpPage from '../components/sign-up-page.component';
import SignUpPagee from '../components/sign-up-page/sign-up-page.component';
const AccessPage = () => {
 // const { user, setUser } = useContext(UserContext);
 // const history = useHistory();
 // useEffect(() => {
 //  fetch('/get-notes').then(res => res.json()).then(data =>{
 //   // setUser(data)
 //   // if (user.length > 0) {
 //   //  const name = user.name
 //   //  history.push(`/profile/${name}`)
 //   // }
 
 //  }
 //  )

 //  }, [user, history, setUser])
 
 

 // const handleRedirect = () => {
  
 // }
 // }
 
 // console.log('See who is logged in',user);
 // console.log(Users);
 // console.log(history);
 return (
  <div>
  {/* <SignUpPage /> */}
  <SignUpPagee />
  </div>
 )
}

export default AccessPage
