import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

import NotesList from "../components/NotesList";

import { UserContext } from "../data-requests/usercontext";

const GetCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const CurrentUser = GetCurrentUser();

const API_URL = `http://localhost:5000/users/user/${
  CurrentUser && CurrentUser.id
}`;

const User = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetch(API_URL, {
      method: "GET",
      headers: {
        "x-access-token": CurrentUser && CurrentUser.accessToken,
      },
    })
      .then((response) => response.json())
      .then(async (data) => await setUser(data))
      .catch((err) => console.log("Fech Error: ", err));
  }, [setUser]);

  const Logout = () => {
    localStorage.removeItem("user");
    useHistory().push("/home");
  };

  return (
    <div>
      Hello{user.username}
      <button>SIGN OUT</button>
      <NotesList />
    </div>
  );
};

export default User;
