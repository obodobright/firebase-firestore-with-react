import React from "react";
import { Link } from "react-router-dom";
const SuccessPage = () => {
  return (
    <div style={div}>
      <h1>Thank you for submitting your Application</h1>
      <p>We will get back to yoou soon</p>
      <Link to="/pushdata">
        <button>Make another application</button>
      </Link>
      <Link to="/homescreen">
        <button>back to home</button>
      </Link>
    </div>
  );
};

export default SuccessPage;

const div = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};
