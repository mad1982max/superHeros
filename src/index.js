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
    company: "Marvel.png",
  },
  {
    name: "HULK",
    height: 250,
    weight: 300,
    photo: "hulk.jpg",
    company: "Marvel.png",
  },
  {
    name: "Batman",
    height: 180,
    weight: 90,
    photo: "batman.jpg",
    company: "DC.png",
  },
  {
    name: "Super Woman",
    height: 175,
    weight: 60,
    photo: "sw.jpg",
    company: "DC.png",
  },
  {
    name: "Super Man",
    height: 182,
    weight: 85,
    photo: "sm.jpg",
    company: "DC.png",
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
