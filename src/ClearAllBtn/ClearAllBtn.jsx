import React from "react";
import "./ClearAllBtn.css"

const ClearAllBtn = ({clearAll}) => {
  const handleButtonClick = () => {
    clearAll();
  };
  return <button className="btn" onClick={handleButtonClick}>clear all</button>;
};

export default ClearAllBtn;
