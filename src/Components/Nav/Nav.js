import React, { Component } from "react";

import { Link } from "react-router-dom";

import Search from "./Search";
import Burger from "./Burger/Burger";

import "./Nav.scss";

class Nav extends Component {
  state = {
    search: ""
  };

  onSearch = event => {
    event.preventDefault();
    this.setState({ search: event.target.value });
  };

  onBurger = () => {
    this.setState({ burger: !this.state.burger });
  };

  render() {
    return (
      <div
        className="Nav"
        style={this.state.burger ? { background: "#0c2856fc" } : null}
      >
        <div
          className="navTitle"
          style={this.state.burger ? { display: "flex" } : null}
        >
          <Burger click={this.onBurger} burger={this.state.burger} />

          <h2 style={this.state.burger ? { display: "block" } : null}>
            <Link to="/">IMBG</Link>
          </h2>
        </div>

        <div
          className="Navigation"
          style={this.state.burger ? { display: "flex" } : null}
        >
          <Link to="/movies">
            <h3>Movies</h3>
          </Link>
          <Link to="/shows">
            <h3>Shows</h3>
          </Link>

          <Search change={this.onSearch} results={this.state.search} />
        </div>
      </div>
    );
  }
}

export default Nav;
