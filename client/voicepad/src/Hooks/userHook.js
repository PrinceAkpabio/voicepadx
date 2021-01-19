import { getUserPage } from '../data-requests/user';

export const useFetchUser = (setUser,setNotelist) => {
 const fetchUser = async () => {
  const fetched = getUserPage();
       fetched.then((response) => setUser(response.data))
       .then(() => setNotelist(true))
       .catch((err) => console.log("Fetch Error: ", err));
 };
 return fetchUser;
};
