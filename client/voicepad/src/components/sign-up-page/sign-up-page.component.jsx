import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../data-requests/usercontext";
import FormInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { Register } from "../../data-requests/auth";
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

const SignUpPagee = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState({
    username: "",
  });
  const [email, setEmail] = useState({
    email: "",
  });
  const [password, setPassword] = useState({
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState({
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password must be at least 8 characters long!"
            : "";
        break;
      case "confirmPassword":
        errors.confirmPassword =
          value === password.password ? "" : "Password doesn't match";
        break;
      default:
        break;
    }

    event.target.name === "username"
      ? setUsername({ [name]: value })
      : event.target.name === "email"
      ? setEmail({ [name]: value })
      : event.target.name === "password"
      ? setPassword({ [name]: value })
      : event.target.name === "confirmPassword"
      ? setConfirmPassword({ [name]: value })
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
      Register(username.username, email.email, password.password).then(
        (response) => {
          alert(response.data);
        }
      );
      username.username = "";
      setEmail({
        email: "",
      });
      setPassword({
        password: "",
      });
      setConfirmPassword({
        confirmPassword: "",
      });
      // if (history) {
      //   history.push(`/profile/${username.username}`);
      // }
    } catch (error) {
      console.error("Error in creating User Docs", error);
    }
  };

  // const { name, ...otherProps } = user;
  console.log(user);
  console.log(email);
  console.log(username);
  console.log(password);
  console.log(confirmPassword);

  return (
    <div className="sign-up-page">
      <nav className="signup-nav">
        <img id="nav-image" src={mic} alt="voicepad-logo" />

        <Link id="nav-link" to="signin">
          Sign In
        </Link>
      </nav>

      <div className="signup-content">
        <h3 className="title">Don't have an account ? Sign Up</h3>

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
            type="email"
            name="email"
            handleChange={handleChange}
            value={email}
            label="Email"
            errors={errors.email}
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

          <FormInput
            type="password"
            name="confirmPassword"
            handleChange={handleChange}
            value={confirmPassword}
            label="Confirm Password"
            errors={errors.confirmPassword}
            required
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>

        <small className="alternative">
          Already have an account?{" "}
          <Link id="alt" to="/signin">
            Sign In
          </Link>
        </small>
      </div>
    </div>
  );
};

export default SignUpPagee;
