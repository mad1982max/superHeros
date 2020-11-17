import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Header } from "./Components/Header.jsx";
import { Inputs } from "./Components/Inputs.jsx";
import { UserCards } from "./Components/UserCards.jsx";

const superHeroes = [
  {
    name: "IRON MAN",
    height: 175,
    weight: 80,
    photo: "im.jpg",
  },
  {
    name: "HULK",
    height: 250,
    weight: 300,
    photo: "hulk.jpg",
  },
];

const App = () => (
  <div className="app">
    <Header />
    <UserCards superHeroes={superHeroes} />
    <Inputs />
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
