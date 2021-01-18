import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const today = new Date();
  const utcYear = today.getUTCFullYear();
  return (
    <footer id="footer">
      <h4>
        {" "}
        VOICEPAD | DEVELOPED BY
        <Link
          to={{ pathname: "https://akpabioprince.netlify.app" }}
          target="_blank"
        >
          BOOST YOUR BUSINESS
        </Link>
        &copy; {utcYear}
      </h4>
    </footer>
  );
};

export default Footer;
