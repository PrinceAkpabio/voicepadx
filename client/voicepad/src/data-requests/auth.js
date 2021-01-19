import axios from 'axios';

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

const useLogOut = (history,setUser) => { 
  const Logout = () => {
    history.push("/");
    localStorage.removeItem("user");
    setUser({});
  }
  return Logout
};

const GetCurrentUser = () => {
 return JSON.parse(localStorage.getItem("user"));
};

export{
 Register,
 Login,
 useLogOut,
 GetCurrentUser
};