import React, { Component } from "react";

import Nav from "../../../Nav/Nav";
import PopularMovie from "./Single/Popular";
import Pages from "../../../Pages/Pages";

import axios from "axios";

import "../Categorie.scss";

const API_KEY = "736cb0f2a5061149d7b43012b1dada7e";

class Popular extends Component {
  state = {
    popular: null,
    one: true,
    two: false,
    three: false,
    four: false,
    five: false
  };
  componentDidMount = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(res => this.setState({ popular: res.data }))
      .catch(err => console.log(err));
  };

  onPageOne = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(res => this.setState({ popular: res.data }))
      .catch(err => console.log(err));

    this.setState({
      one: true,
      two: false,
      three: false,
      four: false,
      five: false
    });
  };
  onPageTwo = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`
      )
      .then(res => this.setState({ popular: res.data }))
      .catch(err => console.log(err));

    this.setState({
      one: false,
      two: true,
      three: false,
      four: false,
      five: false
    });
  };
  onPageThree = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`
      )
      .then(res => this.setState({ popular: res.data }))
      .catch(err => console.log(err));

    this.setState({
      one: false,
      two: false,
      three: true,
      four: false,
      five: false
    });
  };
  onPageFour = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=4`
      )
      .then(res => this.setState({ popular: res.data }))
      .catch(err => console.log(err));

    this.setState({
      one: false,
      two: false,
      three: false,
      four: true,
      five: false
    });
  };
  onPageFive = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=5`
      )
      .then(res => this.setState({ popular: res.data }))
      .catch(err => console.log(err));

    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
      five: true
    });
  };

  render() {
    return (
      <div className="MovieCategorie">
        <Nav />
        <div className="Categories_">
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
        <Pages
          onOne={this.onPageOne}
          onTwo={this.onPageTwo}
          onThree={this.onPageThree}
          onFour={this.onPageFour}
          onFive={this.onPageFive}
          One={this.state.one}
          Two={this.state.two}
          Three={this.state.three}
          Four={this.state.four}
          Five={this.state.five}
        />
      </div>
    );
  }
}

export default Popular;
