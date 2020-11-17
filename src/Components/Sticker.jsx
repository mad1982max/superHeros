import React from "react";
const logos = require.context("../logos", true);

export class Sticker extends React.Component {
  render() {
    let company = this.props.logo;
    let logo = logos(`./${company}.png`).default;
    return (
      <div className="logo">
        <img src={logo} alt={logo} />
      </div>
    );
  }
}
