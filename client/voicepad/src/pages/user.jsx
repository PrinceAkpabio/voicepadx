import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useParams, useHistory, Redirect } from "react-router-dom";
import axios from "axios";

import NotesList from "../components/NotesList";

import { UserContext } from "../data-requests/usercontext";
import CustomButton from "../components/custom-button/custom-button.component";

const User = () => {
  const { user, setUser } = useContext(UserContext);
  const [notelist, setNotelist] = useState(false);
  const history = useHistory();
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

  const Logout = () => {
    history.push("/");
    localStorage.removeItem("user");
    setUser({});
  };

  return (
    <div className="userPage ">
      <CustomButton className="custom-button" onClick={Logout}>
        SIGN OUT
      </CustomButton>
      <h2 className="welcome-msg">
        Hello
        <span id="username">{user.username}</span>
      </h2>
      {notelist ? <NotesList /> : null}
    </div>
  );
};

export default User;
