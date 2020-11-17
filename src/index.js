import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Header } from "./Components/Header.jsx";
import { Inputs } from "./Components/Inputs.jsx";
import { UserCards } from "./Components/UserCards.jsx";
import { superHeroes } from "./Shares/superHeroes";

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
