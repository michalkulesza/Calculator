import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    return (
      <div className="input-wrapper">
        <p>{this.props.input}</p>
      </div>
    );
  }
}

export default Input;
