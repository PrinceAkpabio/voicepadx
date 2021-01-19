import axios from 'axios';
import AuthHeader from '../data-requests/auth.header';

export const useFetchUser = (setUser,setNotelist) => {
      const fetchUser = async () => {
       const user = JSON.parse(localStorage.getItem("user"));

       const API_URL = `/users/user/${user.id}`;

       await axios.get(API_URL, { headers: AuthHeader() }).then((response) => setUser(response.data))
       .then(() => setNotelist(true))
       .catch((err) => console.log("Fetch Error: ", err));
 };
 return fetchUser;
};
