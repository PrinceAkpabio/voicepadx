import axios from 'axios';
import { useHistory } from 'react-router-dom';

const API_URL = "/users/"

const Register = (username, email, password) => {
  
 return axios.post(`${API_URL}signup`, {
  username,
  email,
  password,
 });
};

const Login = async(username, password) => {

 return await axios
  .post(`${API_URL}signin`, {
   username,
   password,
  })
  .then(response => {
   if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data))
   }
   return response.data;
  });
};

const Logout = () => {
  localStorage.removeItem("user");
  // useHistory().push('/home')
};

const GetCurrentUser = () => {
 return JSON.parse(localStorage.getItem("user"));
};

export{
 Register,
 Login,
 Logout,
 GetCurrentUser
};