import React from "react";
import { Sticker } from "../Stickers/Sticker";
import "./herocards.css";

const images = require.context("../../img", true);

export class HeroCards extends React.Component {
  // state = {
  //   checkedHeroes: [],
  // };

  constructor(props) {
    super(props);
    this.state = { checkedHeroes: [] };
  }

  hoverOnCard = (e) => {
    let name = e.currentTarget.dataset.name;
    this.props.hoverHero(name);
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

  leaveCard = (e) => {
    this.props.hoverHero("");
  };

  render() {
    let users = this.props.superHeroes.map(({ name, photo, company }) => {
      let imageHero = images(`./${photo}`).default;

      return (
        <div
          key={name}
          className="hero-card"
          onClick={this.clickOnCard}
          onMouseEnter={this.hoverOnCard}
          onMouseLeave={this.leaveCard}
          data-name={name}
        >
          <div className="hero-img">
            <Sticker logo={company} />
            <img className="photo" src={imageHero} alt={name} />
          </div>
          <div className="hero-name">{name}</div>
        </div>
      );
    });

    return (
      <>
        <div className="cards-wrapper">
          {this.state.checkedHeroes.length > 0 ? (
            <div className="choose-label align-left">
              You choosed:{" "}
              {this.state.checkedHeroes.map((hero, index) => (
                <span key={hero + index} className="span-hero-wrapper">
                  {" "}
                  {hero}{" "}
                </span>
              ))}
            </div>
          ) : (
            <div className="choose-label">Choose your heroes!</div>
          )}

          <div className="cards">{users}</div>
        </div>
      </>
    );
  }
}
