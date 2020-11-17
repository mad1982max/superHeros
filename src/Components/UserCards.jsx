import React from "react";
import { Sticker } from "./Sticker";

const images = require.context("../img", true);

export class UserCards extends React.Component {
  render() {
    let users = this.props.superHeroes.map(({ name, photo, company }) => {
      let imageHero = images(`./${photo}`).default;

      return (
        <div key={name} className="user-card">
          <div className="user-img">
            <Sticker logo={company} />
            <img className="photo" src={imageHero} alt={name} />
          </div>
          <div className="user-name">{name}</div>
        </div>
      );
    });

    return users;
  }
}
