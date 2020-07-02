import React, { Component } from "react";
import AnimatedTitle from "./components/AnimatedTitle";
import ColorInputs from "./components/ColorInputs";
import RandomColors from "./components/RandomColors";
import Value from "./components/Value";

import { CopyToClipboard } from "react-copy-to-clipboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initial states for colors and copy button message
      color1: "#AE25E1",
      color2: "#15CE2D",
      message: "Copy to clipboard",
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  // Handle color1 selection
  handleChange1(event) {
    this.setState({
      color1: event.target.value.toUpperCase(),
      message: "Copy to clipboard",
    });
  }

  // Handle color2 selection
  handleChange2(event) {
    this.setState({
      color2: event.target.value.toUpperCase(),
      message: "Copy to clipboard",
    });
  }

  // Return a random color
  randomColor() {
    return `#${Math.floor(Math.random() * 256 ** 3)
      .toString(16)
      .padStart(6, "0")}`.toUpperCase();
  }

  // Use randomColor function to set two random colors
  handlechange3 = () => {
    let random1 = this.randomColor();
    let random2 = this.randomColor();

    this.setState({
      color1: random1,
      color2: random2,
      message: "Copy to clipboard",
    });
  };

  render() {
    // Current color values
    let value = `background: linear-gradient(to right, ${this.state.color1}, ${this.state.color2})`;

    return (
      <main
        className="d-flex flex-column vh-100 justify-content-center align-items-center overflow-auto"
        // Display current linear gradient background with inline style (https://reactjs.org/docs/dom-elements.html#style)
        style={{
          background: `linear-gradient(to right, ${this.state.color1}, ${this.state.color2})`,
        }}
      >
        <AnimatedTitle />
        <ColorInputs
          color1={this.state.color1}
          color2={this.state.color2}
          handleChange1={this.handleChange1}
          handleChange2={this.handleChange2}
        />
        <RandomColors handlechange3={this.handlechange3} />
        <Value value={value} />
        <CopyToClipboard
          text={value}
          onCopy={() => this.setState({ message: "Copied" })}
        >
          <button className="btn btn-light">{this.state.message}</button>
        </CopyToClipboard>
      </main>
    );
  }
}

export default App;
