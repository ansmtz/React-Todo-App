import React, { useState } from "react";
import "./Button.css";
const Button = (props) => {
  const clickHandler = () => {
    if (props.handler) {
      props.handler();
    } else {
      return 0;
    }
  };
  return (
    <button
      className={!props.isPrimary ? "Button" : "Button Button-primary"}
      onClick={clickHandler}
    >
      <img src={props.icon} alt={props.alt} />
    </button>
  );
};

export default Button;
