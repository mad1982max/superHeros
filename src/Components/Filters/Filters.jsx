import React from "react";
import "./filters.css";

export class Filters extends React.Component {
  state = {
    count: 0,
    filters: {
      male: false,
      female: false,
      it: false,
      DC: false,
      Marvel: false,
      all: true,
    },
  };

  defaultFilter = {
    male: false,
    female: false,
    it: false,
    DC: false,
    Marvel: false,
  };

  handleChange = (e) => {
    let { name, checked } = e.target;

    if (name === "all" && checked) {
      this.setState(
        (prevState) => ({
          filters: {
            ...this.defaultFilter,
            [name]: checked,
          },
        }),
        () => this.filterFn(this.state.filters)
      );
    } else {
      this.setState(
        (prevState) => ({
          filters: {
            ...prevState.filters,
            [name]: checked,
            all: false,
          },
        }),
        () => this.filterFn(this.state.filters)
      );
    }
  };

  clickFn = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    // this.filterFn(this.state.filters);
  }

  filterFn = (filters) => {
    this.props.filterFn(filters);
  };

  render() {
    return (
      <>
        <div className="filters">
          <div className="filter-group">
            <label htmlFor="all">all</label>
            <input
              checked={this.state.filters.all}
              onChange={this.handleChange}
              name="all"
              id="all"
              type="checkbox"
            />
          </div>
          <div className="filter-group">
            <label htmlFor="male">Male</label>
            <input
              checked={this.state.filters.male}
              onChange={this.handleChange}
              name="male"
              id="male"
              type="checkbox"
            />
            <label htmlFor="female">Female</label>
            <input
              checked={this.state.filters.female}
              onChange={this.handleChange}
              id="female"
              name="female"
              type="checkbox"
            />
            <label htmlFor="it">It</label>
            <input
              checked={this.state.filters.it}
              onChange={this.handleChange}
              id="it"
              name="it"
              type="checkbox"
            />
          </div>

          <div className="filter-group">
            <label htmlFor="marvel">Marvel</label>
            <input
              checked={this.state.filters.marvel}
              onChange={this.handleChange}
              id="marvel"
              name="Marvel"
              type="checkbox"
            />
            <label htmlFor="dc">DC</label>
            <input
              checked={this.state.filters.dc}
              onChange={this.handleChange}
              id="dc"
              name="DC"
              type="checkbox"
            />
          </div>

          <button className="counter" onClick={this.clickFn}>
            {`Counter: ${this.state.count}`}
          </button>
        </div>
      </>
    );
  }
}
