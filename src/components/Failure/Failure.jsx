import React from "react";
import { useNavigate } from "react-router-dom";
import './Failure.scss';

function Failure() {
  const navigate = useNavigate();
  return (
    <div className="fail">
      <h1>Sorry,Payment failed</h1>
      <button className="btn" onClick={()=>navigate("/")}>Go to home</button>
    </div>
  );
}

export default Failure;
