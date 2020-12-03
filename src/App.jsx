import React from "react";

import "./styles.css";
import { Header } from "./Components/Header/Header";
import { Filters } from "./Components/Filters/Filters.jsx";
import { HeroCards } from "./Components/HeroCards/HeroCards";
import { superHeroes } from "./Shares/superHeroes";
import { HeroInfo } from "./Components/HeroInfo";

export default class App extends React.Component {
  state = {
    currentHero: "",
    filters: {
      all: true,
    },
  };

  chooseHeroFn = (heroName) => {
    let heroObject = superHeroes.find((hero) => hero.name === heroName) || {};
    this.setState({ currentHero: heroObject });
  };

  useFilters = (data) => {
    console.log("on app:", data);
    this.setState({ filters: data });
  };

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps", state);
  //   return { state };
  // }

  render() {
    return (
      <div className="app">
        <Header />
        <Filters filterFn={this.useFilters} />
        <div className="hero-wrapper">
          <HeroInfo hero={this.state.currentHero} />
          <HeroCards
            filters={this.state.filters}
            superHeroes={superHeroes}
            hoverHero={this.chooseHeroFn}
          />
        </div>
      </div>
    );
  }
}
