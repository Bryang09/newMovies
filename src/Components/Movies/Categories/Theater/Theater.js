import React, { Component } from "react";

import Nav from "../../../Nav/Nav";
import TheaterMovie from "./Single/Theater";

import axios from "axios";

import "../Categorie.scss";

const API_KEY = "736cb0f2a5061149d7b43012b1dada7e";

class Theater extends Component {
  state = {
    theater: null
  };
  componentDidMount = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(res => this.setState({ theater: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="MovieCategorie">
        <Nav />
        <div className="Categories">
          <h1> Movies In Theater</h1>
        </div>
        <div className="Movies">
          {this.state.theater !== null ? (
            <TheaterMovie
              theater={this.state.theater}
              change={this.onNotInitial}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Theater;
