import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import NotesList from "../components/NotesList";

import { UserContext } from "../data-requests/usercontext";

const User = () => {
  const { user, setUser } = useContext(UserContext);
  const [notelist, setNotelist] = useState(false);
  const fetchUser = async () => {
    const GetCurrentUser = () => {
      return JSON.parse(localStorage.getItem("user"));
    };

    const CurrentUser = GetCurrentUser();

    const API_URL = `http://localhost:5000/users/user/${
      CurrentUser && CurrentUser.id
    }`;

    await fetch(API_URL, {
      method: "GET",
      headers: {
        "x-access-token": CurrentUser && CurrentUser.accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .then(() => setNotelist(true))
      .catch((err) => console.log("Fech Error: ", err));
  };

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
