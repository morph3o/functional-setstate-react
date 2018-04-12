import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };
  }

  sumarTresMalo = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
  };

  sumarTresBueno = () => {
    // Utilizar 3 setState
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.sumarTresMalo}>Sumar 3 Malo</button>
        <button onClick={this.sumarTresBueno}>Sumar 3 Bueno</button>
        <button onClick={() => this.setState({ counter: 0 })}>Reset</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
