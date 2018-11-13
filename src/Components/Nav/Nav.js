import React, { Component } from "react";

import { Link } from "react-router-dom";

import Search from "./Search";

import "./Nav.scss";

class Nav extends Component {
  state = {
    search: ""
  };

  onSearch = event => {
    event.preventDefault();
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div className="Nav">
        <div className="navTitle">
          <Link to="/">
            <h2>IMBG</h2>
          </Link>
        </div>

        <div className="Navigation">
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
