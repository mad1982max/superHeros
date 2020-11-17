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
    company: "Marvel",
  },
  {
    name: "HULK",
    height: 250,
    weight: 300,
    photo: "hulk.jpg",
    company: "Marvel",
  },
  {
    name: "Batman",
    height: 180,
    weight: 90,
    photo: "batman.jpg",
    company: "DC",
  },
  {
    name: "Super Woman",
    height: 175,
    weight: 60,
    photo: "sw.jpg",
    company: "DC",
  },
  {
    name: "Super Man",
    height: 182,
    weight: 85,
    photo: "sm.jpg",
    company: "DC",
  },
  {
    name: "Penguin",
    height: 150,
    weight: 65,
    photo: "penguin.jpg",
    company: "DC",
  },
  {
    name: "Catwoman",
    height: 168,
    weight: 55,
    photo: "catwoman.jpg",
    company: "DC",
  },
  {
    name: "Rorschach",
    height: 178,
    weight: 75,
    photo: "rorschach.jpg",
    company: "DC",
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
