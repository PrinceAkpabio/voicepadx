import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      Landing Page
      <br />
      <Link to="/signup">
        <button>SIGN UP</button>
      </Link>
      <br />
      <Link to="/login">
        <button>SIGN IN</button>
      </Link>
    </div>
  );
};

export default Landing;
