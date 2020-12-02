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
  };

  chooseHeroFn = (heroName) => {
    let heroObject = superHeroes.find((hero) => hero.name === heroName);
    this.setState({ currentHero: heroObject });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Filters />
        <HeroInfo hero={this.state.currentHero} />
        <HeroCards superHeroes={superHeroes} clickHero={this.chooseHeroFn} />

        {this.state.currentHero && <HeroInfo hero={this.state.currentHero} />}
      </div>
    );
  }
}
