import React from "react";
import { Sticker } from "./Sticker";

const images = require.context("../img", true);

export class UserCards extends React.Component {
  clickOnCard = (e) => {
    let name = e.currentTarget.dataset.name;
    this.props.clickHero(name);
    console.log("click on card:", name);
  };

  leaveCardCard = (e) => {
    this.props.clickHero("");
    console.log("lezve on card:");
  };

  render() {
    let users = this.props.superHeroes.map(({ name, photo, company }) => {
      let imageHero = images(`./${photo}`).default;

      return (
        <div
          key={name}
          className="user-card"
          onClick={this.clickOnCard}
          onMouseEnter={this.clickOnCard}
          onMouseLeave={this.leaveCardCard}
          data-name={name}
        >
          <div className="user-img">
            <Sticker logo={company} />
            <img className="photo" src={imageHero} alt={name} />
          </div>
          <div className="user-name">{name}</div>
        </div>
      );
    });

    return <div className="cards">{users}</div>;
  }
}
