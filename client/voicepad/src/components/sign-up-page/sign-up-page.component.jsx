import React, { useState } from "react";
import FormInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { Link, useHistory } from "react-router-dom";

import {
  useSignUpFormChange,
  useSignUpFormSubmit,
} from "../../Hooks/signinandsignupHook";

const SignUpPagee = () => {
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
  const handleChange = useSignUpFormChange(
    errors,
    password,
    setUsername,
    setEmail,
    setPassword,
    setConfirmPassword
  );
  const handleSubmit = useSignUpFormSubmit(
    errors,
    username,
    email,
    password,
    history
  );

  // const { name, ...otherProps } = user;
  console.log(email);
  console.log(username);
  console.log(password);
  console.log(confirmPassword);

  return (
    <div className="sign-up-page">
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
          <Link id="alt" to="/login">
            Sign In
          </Link>
        </small>
      </div>
    </div>
  );
};

export default SignUpPagee;
