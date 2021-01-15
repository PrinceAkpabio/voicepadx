import axios from 'axios';

const API_URL = "http://localhost:5000/users/"

const Register = (username, email, password) => {
  
 return axios.post(`${API_URL}signup`, {
  username,
  email,
  password,
 });
};

const Login = (username, password) => {

 return axios
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