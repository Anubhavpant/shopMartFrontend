import React from "react";
import { useNavigate } from "react-router-dom";
import './Success.scss';

function Success() {
  const navigate = useNavigate();
  return (
    <div className="success">
      <h1>Yay &#127881;,Payment was successful.</h1><br/>
      <button className="btn" onClick={()=>navigate("/")}>Go to home</button>
    </div>
  );
}

export default Success;
