import axios from 'axios';
import AuthHeader from './auth.header';

const user = JSON.parse(localStorage.getItem("user"));

const API_URL = `http://localhost:5000/user/user/${user._id}`;

export const getUserPage = () => {
 return axios.get(API_URL, { headers: AuthHeader() });
}