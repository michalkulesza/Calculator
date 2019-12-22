import React, { Component } from "react";
import { evaluate, sqrt, round } from "mathjs";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import ButtonZero from "./components/ButtonZero";

class App extends Component {
  state = {
    input: "0"
  };

  componentDidUpdate() {
    if (this.state.input === "") {
      this.setState({ input: "0" });
    } else if (this.state.input.length > 11) {
      this.setState({ input: `${this.state.input.slice(1, this.state.input.length)}` });
    }
  }

  addToInput = props => {
    let lastChar = this.state.input[this.state.input.length - 1];
    //Peroid
    if (props === ".") {
      if (this.state.input === "0") {
        this.setState({ input: `${this.state.input}${props}` });
        return;
      } else if (lastChar !== ".") {
        this.setState({ input: `${this.state.input}${props}` });
      }
      //Special Chars
      // +
    } else if (props === "+") {
      if (
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "." ||
        lastChar === "*" ||
        lastChar === "/" ||
        this.state.input === "Error"
      ) {
        return null;
      } else {
        this.setState({ input: `${this.state.input}${props}` });
      }
      // -
    } else if (props === "-") {
      if (lastChar === "-" || lastChar === "." || this.state.input === "Error") {
        return null;
      } else {
        this.setState({ input: `${this.state.input}${props}` });
      }
      //x
    } else if (props === "x") {
      if (
        lastChar === "-" ||
        lastChar === "." ||
        lastChar === "*" ||
        lastChar === "/" ||
        this.state.input === "Error"
      ) {
        return null;
      } else {
        this.setState({ input: `${this.state.input}*` });
      }
      // /
    } else if (props === "/") {
      if (
        lastChar === "-" ||
        lastChar === "." ||
        lastChar === "*" ||
        lastChar === "/" ||
        this.state.input === "Error"
      ) {
        return null;
      } else {
        this.setState({ input: `${this.state.input}${props}` });
      }
    } else {
      //Numbers
      if (this.state.input === "0") {
        this.setState({ input: `${props}` });
      } else {
        this.setState({ input: `${this.state.input}${props}` });
      }
    }
  };

  sqrtInput = () => {
    let lastChar = this.state.input[this.state.input.length - 1];
    if (
      lastChar === "/" ||
      lastChar === "*" ||
      lastChar === "-" ||
      lastChar === "+" ||
      this.state.input === "0" ||
      this.state.input === "Error"
    ) {
      this.setState({ input: "Error" });
    } else {
      this.setState({ input: `${round(sqrt(this.state.input), 3)}` });
    }
  };

  deleteLastChar = () => {
    if (this.state.input === "0") {
      return null;
    } else {
      this.setState({ input: `${this.state.input.slice(0, -1)}` });
    }
  };

  clearInput = () => {
    this.setState({ input: "0" });
  };

  equalInput = () => {
    let lastChar = this.state.input[this.state.input.length - 1];

    if (
      this.state.input === "0" ||
      this.state.input === "Error" ||
      lastChar === "-" ||
      lastChar === "+" ||
      lastChar === "." ||
      lastChar === "*" ||
      lastChar === "/"
    ) {
      return null;
    } else {
      this.setState({ input: `${round(evaluate(this.state.input), 2)}` });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.clearInput}>C</Button>
            <Button handleClick={this.deleteLastChar}>⌫</Button>
            <Button handleClick={this.sqrtInput}>√</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <ButtonZero handleClick={this.addToInput}>0</ButtonZero>
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.equalInput}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
