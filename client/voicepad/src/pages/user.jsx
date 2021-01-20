import React, { useEffect, useState } from "react";
import useSWR from "swr";

import NotesList from "../components/NotesList";

import { useFetchUser } from "../Hooks/userHook";
import ErrorPage from "./ErrorPage";
import Loading from "./loadingPage";

const User = () => {
  const { fetchUser, API_URL, TOKEN } = useFetchUser();
  useEffect(() => {
    const GetCurrentUser = () => {
      let user = JSON.parse(localStorage.getItem("user"));

      if (user.accessToken) {
        return user._id;
      }
    };
    GetCurrentUser();
  }, []);
  const { data, error } = useSWR(TOKEN ? API_URL : null, fetchUser, {
    refreshInterval: 2000,
    // revalidateOnMount: true,
  });

  console.log("User Data :", data);
  console.log("User Error :", error);

  if (error) return <ErrorPage />;
  if (!data && !error) return <Loading />;
  return (
    <div className="userPage ">
      <h2 className="welcome-msg">
        Hello
        <span id="username">{data.username}</span>
      </h2>
      <NotesList user={data} />
    </div>
  );
};

export default User;
