import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Header } from "./Components/Header.jsx";
import { Inputs } from "./Components/Inputs.jsx";
import { UserCards } from "./Components/UserCards.jsx";
import { superHeroes } from "./Shares/superHeroes";
import { HeroInfo } from "./Components/HeroInfo";

class App extends React.Component {
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
        <Inputs />
        <UserCards superHeroes={superHeroes} clickHero={this.chooseHeroFn} />

        {this.state.currentHero && <HeroInfo hero={this.state.currentHero} />}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
