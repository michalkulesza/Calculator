import React from "react";
import "./ButtonZero.css";

const ButtonZero = props => {
  return (
    <div
      className="button-zero"
      onClick={() => {
        props.handleClick(this.props.children);
      }}
    >
      <div className="button-zero-left">{props.children}</div>
      <div className="button-zero-center" />
      <div className="button-zero-right" />
    </div>
  );
};

export default ButtonZero;
