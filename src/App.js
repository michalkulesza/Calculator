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

  addToInput = props => {
    this.state.input === "Error"
      ? this.setState({ input: `${props}` })
      : props === "x"
      ? this.setState({ input: `${this.state.input + "*"}` })
      : this.state.input === "0" && props !== "0"
      ? this.setState({ input: `${props}` })
      : this.setState({ input: `${this.state.input + props}` });
  };

  sqrtInput = () => {
    this.setState({ input: `${round(sqrt(this.state.input), 3)}` });
  };

  negativeInput = () => {
    this.state.input.charAt(0) !== "-"
      ? this.setState({ input: `-${this.state.input}` })
      : this.setState({ input: `${this.state.input.slice(1)}` });
  };

  clearInput = () => {
    this.setState({ input: "0" });
  };

  equalInput = () => {
    this.state.input === "-" ||
    this.state.input === "+" ||
    this.state.input.charAt(0) === "/" ||
    this.state.input.charAt(0) === "*" ||
    this.state.input.charAt(0) === "0" ||
    this.state.input.charAt(0) === "" ||
    this.state.input.charAt(0) === "="
      ? this.setState({ input: "0" })
      : this.setState({ input: `${round(evaluate(this.state.input), 2)}` });
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.clearInput}>C</Button>
            <Button handleClick={this.negativeInput}>+/-</Button>
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
