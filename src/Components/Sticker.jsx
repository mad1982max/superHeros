import React from "react";
const logos = require.context("../logos", true);
console.log("logos", logos);

export class Sticker extends React.Component {
  render() {
    let company = this.props.logo;
    let logo = logos(`./${company}`).default;
    console.log(company, logo);
    return (
      <div className="logo">
        <img src={logo} />
      </div>
    );
  }
}
