import React, { useState, useEffect, useContext } from "react";

import NotesList from "../components/NotesList";

import { UserContext } from "../data-requests/usercontext";
import { useFetchUser } from "../Hooks/userHook";

const User = () => {
  const { user, setUser } = useContext(UserContext);
  const [notelist, setNotelist] = useState(false);

  const fetchUser = useFetchUser(setUser, setNotelist);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="userPage ">
      <h2 className="welcome-msg">
        Hello
        <span id="username">{user.username}</span>
      </h2>
      {notelist ? <NotesList fetchUser={fetchUser} /> : null}
    </div>
  );
};

export default User;
