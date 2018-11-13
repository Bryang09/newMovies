import React, { Component } from "react";

import Nav from "../../../Nav/Nav";
import PopularShow from "./Single/Popular";

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
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`
      )
      .then(res => this.setState({ popular: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="ShowCategorie">
        <Nav />
        <div className="ShowCategories">
          <h1>Popular Shows</h1>
        </div>
        <div className="Shows">
          {this.state.popular !== null ? (
            <PopularShow
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
