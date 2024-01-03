import React from "react";
import { useNavigate } from "react-router-dom";

function Failure() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Sorry,Payment failed</h1>
      <button onClick={navigate("/")}>Go to home</button>
    </div>
  );
}

export default Failure;
