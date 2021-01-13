import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../data-requests/usercontext';
import FormInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Link, useHistory } from 'react-router-dom';
import mic from '../../Assets/mic.png';


const SignUpPagee = () => {
 const { user, setUser } = useContext(UserContext)
 const [name, setName] = useState({
  name: '',
 });
 const [username, setUsername] = useState({
  username: '',
 });
 const [email, setEmail] = useState({
  email: '',
 });
 const [password, setPassword] = useState({
  password: '',
 });
 const [confirmPassword, setConfirmPassword] = useState({
  confirmPassword: '',
 });
 const history = useHistory()

 const handleSubmit = async event => {
  event.preventDefault();

  // const { name, username, email, password } = user;

  // if (password !== confirmPassword) {
  //  alert('password does not match');
  //  return;
  // }

  try {
   // const { name, username, email, password } = user;
   

   await fetch('/notes',  {
    method: "POST",
     headers: new Headers({
     'Content-type': 'application/json'
    }),
    body: JSON.stringify({
     name: name,
     username: username,
     email: email,
     password: password
    })
   }).then(res => res.json()).then(data => console.log(data))

  // (history ? history.push('/home') : null)
  
  } catch (error) {
   console.error('Error in creating User Docs', error);
  }

 }
const handleChange = event => {
  const { name, value } = event.target;

 event.target.name === 'name'? 
  setName({ [name]: value })
  : 
 event.target.name === 'username'?
  setUsername({ [name]: value }) 
   :
 event.target.name === 'email'?
  setEmail({ [name]: value })
  :
 event.target.name === 'password'?
  setPassword({[name]: value})
  :
 event.target.name === 'confirmPassword'?
  setConfirmPassword({[name]: value})
  :
  alert("Wrong form Selection")
 }

 
 // const { name, ...otherProps } = user;
 console.log(user);
 console.log(name);
 console.log(email);
 console.log(username);
 console.log(password);
 console.log(confirmPassword);


  return (
   <div className='sign-up-page'>
    <nav className='signup-nav'>
     <img id='nav-image' src={mic} alt="voicepad-logo" />

     <Link id='nav-link' to='signin'>Sign In</Link>
    </nav>

    <div className='signup-content'>

     <h3 className='title'>Don't have an account ? Sign Up</h3>

     <form
      // action="/notes"
      // method="POST"
      className='signup-form'
      onSubmit={handleSubmit}
     >
      <FormInput type='text' name='name' handleChange={handleChange} value={name} label='Name' required />
      <FormInput type='text' name='username' handleChange={handleChange} value={username} label='User Name' required />
      <FormInput type='email' name='email' handleChange={handleChange} value={email} label='Email' required />
      <FormInput type='password' name='password' handleChange={handleChange} value={password} label='Password' required />

      <FormInput type='password' name='confirmPassword' handleChange={handleChange} value={confirmPassword} label='Confirm Password' required />

      <CustomButton type='submit' >SIGN UP</CustomButton>
     </form>

     <small className='alternative'>Already have an account? <Link id='alt' to='/signin'>Sign In</Link></small>

    </div>
    
   </div>
  )
}

export default SignUpPagee;