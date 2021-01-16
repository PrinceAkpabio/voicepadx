import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

import NotesList from "../components/NotesList";

import { UserContext } from "../data-requests/usercontext";
import CustomButton from "../components/custom-button/custom-button.component";

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
      .then((data) => setUser(data))
      .catch((err) => console.log("Fech Error: ", err));
  }, [setUser]);

  const Logout = () => {
    localStorage.removeItem("user");
    useHistory().push("/home");
  };

  return (
    <div className="userPage ">
      <CustomButton className="custom-button">SIGN OUT</CustomButton>
      <h2 className="welcome-msg">
        Hello
        <span id="username">{user.username}</span>
      </h2>
      <NotesList />
    </div>
  );
};

export default User;
