import React from "react";

const images = require.context("../img", true);

export class UserCards extends React.Component {
  render() {
    let users = this.props.superHeroes.map(({ name, photo }) => {
      let imageHero = images(`./${photo}`).default;

      return (
        <div key={name} className="user-card">
          <div className="user-img">
            <img src={imageHero} alt={name} />
          </div>
          <div className="user-name">{name}</div>
        </div>
      );
    });

    return users;
  }
}
