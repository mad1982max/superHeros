import React from "react";

const buttonStyles = {
  padding: "10px 20px",
  border: "none",
  borderRadius: 5,
};

export class Inputs extends React.Component {
  clickFn = () => console.log("clicked");

  render() {
    return (
      <button onClick={this.clickFn} style={buttonStyles}>
        PUSHER
      </button>
    );
  }
}
