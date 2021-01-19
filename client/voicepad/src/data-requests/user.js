import axios from 'axios';
import AuthHeader from './auth.header';

const user = JSON.parse(localStorage.getItem("user"));

const API_URL = `/users/user/${user.id}`;

export const getUserPage = async() => {
 return await axios.get(API_URL, { headers: AuthHeader() })
}