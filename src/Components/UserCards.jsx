import React, { Fragment } from "react";
import { Sticker } from "./Sticker";

const images = require.context("../img", true);

export class UserCards extends React.Component {
  // state = {
  //   checkedHeroes: [],
  // };

  constructor(props) {
    super(props);
    this.state = { checkedHeroes: [] };
  }

  hoverOnCard = (e) => {
    let name = e.currentTarget.dataset.name;
    this.props.clickHero(name);
  };

  clickOnCard = (e) => {
    let element = e.currentTarget;
    let name = element.dataset.name;
    let checkedHeroes;
    let greyFlag = false;

    if (!this.state.checkedHeroes.includes(name)) {
      checkedHeroes = this.state.checkedHeroes.concat(name);
      greyFlag = true;
    } else {
      checkedHeroes = this.state.checkedHeroes.filter((hero) => hero !== name);
    }
    this.setState((state) => ({
      checkedHeroes,
    }));
    this.viewChecked(element, greyFlag);
  };

  viewChecked = (element, greyFlag) => {
    element.classList.toggle("checkedGrey");
  };

  leaveCardCard = (e) => {
    this.props.clickHero("");
  };

  render() {
    let users = this.props.superHeroes.map(({ name, photo, company }) => {
      let imageHero = images(`./${photo}`).default;

      return (
        <div
          key={name}
          className="user-card"
          onClick={this.clickOnCard}
          onMouseEnter={this.hoverOnCard}
          onMouseLeave={this.leaveCardCard}
          data-name={name}>
          <div className="user-img">
            <Sticker logo={company} />
            <img className="photo" src={imageHero} alt={name} />
          </div>
          <div className="user-name">{name}</div>
        </div>
      );
    });

    return (
      <Fragment>
        <div>You choose: {this.state.checkedHeroes.join(";")}</div>
        <div className="cards">{users}</div>
      </Fragment>
    );
  }
}
