import React from "react";

export class Inputs extends React.Component {
  state = {
    count: 0,
  };

  clickFn = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <button className="counter" onClick={this.clickFn}>
        {`Counter: ${this.state.count}`}
      </button>
    );
  }
}
