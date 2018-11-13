import React, { Component } from "react";
import axios from "axios";

import Nav from "../../Nav/Nav";
import Hero from "./Hero/Hero";
import Popular from "./Popular/Popular";
import Top from "./Top/Top";
import Theaters from "./Theaters/Theaters";

import "./Landing.scss";

const API_KEY = "736cb0f2a5061149d7b43012b1dada7e";

class Landing extends Component {
  state = {
    popular: null,
    top: null,
    theaters: null
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(res => this.setState({ popular: res.data }))
      .catch(err => console.log(err));

    axios
      .get(
        `
      https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(res => this.setState({ top: res.data }))
      .catch(err => console.log(err));

    axios
      .get(
        `
    https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(res => this.setState({ theaters: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Landing">
        <Nav />
        <Hero />
        <div className="Landing_Content">
          {this.state.popular !== null ? (
            <Popular popular={this.state.popular} />
          ) : null}
          {this.state.top !== null ? <Top top={this.state.top} /> : null}
          {this.state.theaters !== null ? (
            <Theaters theaters={this.state.theaters} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Landing;
