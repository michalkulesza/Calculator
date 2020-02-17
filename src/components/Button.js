import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <div
      className={`button ${
        !isNaN(props.children) || props.children === "."
          ? "dark-gray"
          : props.children === "C" || props.children === "⌫" || props.children === "√"
          ? "gray"
          : "orange"
      }`}
      onClick={() => {
        props.handleClick(props.children);
      }}
    >
      {props.children}
    </div>
  );
};

export default Button;
