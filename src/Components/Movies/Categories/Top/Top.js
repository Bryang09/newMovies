import React, { Component } from "react";

import Nav from "../../../Nav/Nav";
import TopMovies from "./Single/Top";

import axios from "axios";

import "../Categorie.scss";

const API_KEY = "736cb0f2a5061149d7b43012b1dada7e";

class Top extends Component {
  state = {
    top: null
  };
  componentDidMount = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(res => this.setState({ top: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="MovieCategorie">
        <Nav />
        <div className="Categories">
          <h1>Top Movies</h1>
        </div>
        <div className="Movies">
          {this.state.top !== null ? (
            <TopMovies top={this.state.top} change={this.onNotInitial} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Top;
