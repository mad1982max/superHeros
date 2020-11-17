import React from "react";

export class Inputs extends React.Component {
  state = {
    count: 0,
  };

  clickFn = () => console.log("clicked");

  render() {
    return (
      <button className="counter" onClick={this.clickFn}>
        Counter
      </button>
    );
  }
}
