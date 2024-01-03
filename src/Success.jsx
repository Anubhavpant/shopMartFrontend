import React from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Yay &#127881;,Payment was successful.</h1>
      <button onClick={navigate("/")}>Go to home</button>
    </div>
  );
}

export default Success;
