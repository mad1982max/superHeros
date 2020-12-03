import React from "react";
import "./heroInfo.css";

export class HeroInfo extends React.Component {
  render() {
    let { height = "", weight = "" } = this.props.hero;

    return (
      // <div className="info-wrapper">
      <div className="info-card">
        <div className="raw">
          <div className="param">HEIGHT:</div>
          <div className="val">{height}</div>
        </div>
        <div className="raw">
          <div className="param">WEIGHT:</div>
          <div className="val">{weight}</div>
        </div>
      </div>
      // </div>
    );
  }
}
