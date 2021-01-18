import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../components/custom-button/custom-button.component";
import AddPublicNote from "../components/AddPublicNote";
const Landing = () => {
  return (
    <div className="LandingPage">
      <AddPublicNote />
      <div className="LandingPage-info">
        <h3>Do you want to save multiple notes and edit them later? </h3>
        <Link to="/signup">
          <CustomButton>REGISTER</CustomButton>
        </Link>
        <h3>Already have an account?</h3>
        <Link to="/login">
          <CustomButton>SIGN IN</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
