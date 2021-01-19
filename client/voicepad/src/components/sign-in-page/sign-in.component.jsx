import React, { useState, useContext } from "react";
import { UserContext } from "../../data-requests/usercontext";
import FormInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { Link, useHistory } from "react-router-dom";

import {
  useSignInFormChange,
  useSignInFormSubmit,
} from "../../Hooks/signinandsignupHook";

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
  const handleChange = useSignInFormChange(errors, setUsername, setPassword);
  const handleSubmit = useSignInFormSubmit(
    errors,
    username,
    password,
    setUser,
    history
  );

  console.log(user);
  console.log(username);
  console.log(password);

  return (
    <div className="sign-up-page">
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
