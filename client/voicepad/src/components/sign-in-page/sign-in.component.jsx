import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../data-requests/usercontext";
import FormInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { Login } from "../../data-requests/auth";
import { Link, useHistory } from "react-router-dom";
import mic from "../../Assets/mic.png";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

const SignInPagee = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState({
    username: "",
  });
  const [password, setPassword] = useState({
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "username":
        errors.username =
          value.length < 5
            ? "Full Name must be at least 5 characters long!"
            : "";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password must be at least 8 characters long!"
            : "";
        break;
      default:
        break;
    }

    event.target.name === "username"
      ? setUsername({ [name]: value })
      : event.target.name === "password"
      ? setPassword({ [name]: value })
      : alert("Wrong form Selection");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm(errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }

    try {
      Login(username.username, password.password).then((response) => {
        //   alert(response.data);

        history.push(`/profile/${username.username}`);
      });
      // if (history) {

      // }
    } catch (error) {
      console.error("Error in creating User Docs", error);
    }
  };

  console.log(user);
  console.log(username);
  console.log(password);

  return (
    <div className="sign-up-page">
      <nav className="signup-nav">
        <img id="nav-image" src={mic} alt="voicepad-logo" />

        <Link id="nav-link" to="/signup">
          Sign Up
        </Link>
      </nav>

      <div className="signup-content">
        <h3 className="title">Have an account ? Sign In</h3>

        <form className="signup-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="username"
            handleChange={handleChange}
            value={username}
            label="User Name"
            errors={errors.username}
            required
          />
          <FormInput
            type="password"
            name="password"
            handleChange={handleChange}
            value={password}
            label="Password"
            errors={errors.password}
            required
          />

          <CustomButton type="submit">SIGN IN</CustomButton>
        </form>

        <small className="alternative">
          Don't have an account?{" "}
          <Link id="alt" to="/signup">
            Sign Up
          </Link>
        </small>
      </div>
    </div>
  );
};

export default SignInPagee;
