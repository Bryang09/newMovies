import React, { Component } from "react";

import Nav from "../../../Nav/Nav";
import PopularMovie from "./Single/Popular";

import axios from "axios";

import "../Categorie.scss";

const API_KEY = "736cb0f2a5061149d7b43012b1dada7e";

class Popular extends Component {
  state = {
    popular: null
  };
  componentDidMount = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
      )
      .then(res => this.setState({ popular: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="MovieCategorie">
        <Nav />
        <div className="Categories">
          <h1>Popular Movies</h1>
        </div>
        <div className="Movies">
          {this.state.popular !== null ? (
            <PopularMovie
              popular={this.state.popular}
              change={this.onNotInitial}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Popular;
