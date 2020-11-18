import React from "react";

export class HeroInfo extends React.Component {
  render() {
    let { height, weight } = this.props.hero;
    return (
      <div className="infoWrapper">
        <div className="raw">
          <div className="param">HEIGHT:</div>
          <div className="val">{height}</div>
        </div>
        <div className="raw">
          <div className="param">WEIGHT:</div>
          <div className="val">{weight}</div>
        </div>
      </div>
    );
  }
}
