import React from "react";
import "./Login.css";
import { loginUrl } from "../utils/spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://logos-download.com/wp-content/uploads/2016/08/Spotify_logo-700x210.png"
        alt="logo"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
