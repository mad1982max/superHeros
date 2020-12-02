import React from "react";

export class HeroInfo extends React.Component {
  render() {
    let heroHeight = "";
    let heroWeight = "";
    if (this.props.hero) {
      console.log(this.props.hero);
      let { height, weight } = this.props.hero;
      heroHeight = height;
      heroWeight = weight;
    }

    return (
      <div className="infoWrapper">
        <div className="raw">
          <div className="param">HEIGHT:</div>
          <div className="val">{heroHeight}</div>
        </div>
        <div className="raw">
          <div className="param">WEIGHT:</div>
          <div className="val">{heroWeight}</div>
        </div>
      </div>
    );
  }
}
