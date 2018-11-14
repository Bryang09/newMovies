import React, { Component } from "react";

import Nav from "../../../Nav/Nav";
import TopMovies from "./Single/Top";
import Pages from "../../../Pages/Pages";

import axios from "axios";

import "../Categorie.scss";

const API_KEY = "736cb0f2a5061149d7b43012b1dada7e";

class Top extends Component {
  state = {
    top: null,
    one: true,
    two: false,
    three: false,
    four: false,
    five: false
  };
  componentDidMount = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(res => this.setState({ top: res.data }))
      .catch(err => console.log(err));
  };

  onPageOne = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(res => this.setState({ top: res.data }))
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
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`
      )
      .then(res => this.setState({ top: res.data }))
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
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=3`
      )
      .then(res => this.setState({ top: res.data }))
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
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=4`
      )
      .then(res => this.setState({ top: res.data }))
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
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=5`
      )
      .then(res => this.setState({ top: res.data }))
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
          <h1>Top Movies</h1>
        </div>
        <div className="Movies">
          {this.state.top !== null ? (
            <TopMovies top={this.state.top} change={this.onNotInitial} />
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

export default Top;
