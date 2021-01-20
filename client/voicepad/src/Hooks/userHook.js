import axios from 'axios';
import AuthHeader from '../data-requests/auth.header';


export const useFetchUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));

   const API_URL = `/users/user/${user?.id ? user?.id :  'user'}`;

  const TOKEN = user?.accessToken ? user?.accessToken : false;
   const fetchUser = async (API_URL) => {

      return await axios.get(API_URL, { headers: AuthHeader() })
      .then(response => response.data )
  };
 return {fetchUser, API_URL, TOKEN};
};
