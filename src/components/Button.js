import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <div
        className={`button ${
          !isNaN(this.props.children) || this.props.children === "."
            ? "dark-gray"
            : this.props.children === "C" ||
              this.props.children === "+/-" ||
              this.props.children === "√"
            ? "gray"
            : "orange"
        }`}
        onClick={() => {
          this.props.handleClick(this.props.children);
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;
