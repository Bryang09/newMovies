import React, { Component } from "react";

import Nav from "../../../Nav/Nav";
import TopShows from "./Single/Top";

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
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(res => this.setState({ top: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="ShowCategorie">
        <Nav />
        <div className="ShowCategories">
          <h1>Top Shows</h1>
        </div>
        <div className="Shows">
          {this.state.top !== null ? <TopShows top={this.state.top} /> : null}
        </div>
      </div>
    );
  }
}

export default Top;
