import React, { Component } from "react";
import "./ButtonZero.css";

class ButtonZero extends Component {
  render() {
    return (
      <div
        className="button-zero"
        onClick={() => {
          this.props.handleClick(this.props.children);
        }}
      >
        <div className="button-zero-left">{this.props.children}</div>
        <div className="button-zero-center" />
        <div className="button-zero-right" />
      </div>
    );
  }
}

export default ButtonZero;
