import React, { Component } from "react";

import "./SearchResults.scss";
import axios from "axios";

import Nav from "../Nav/Nav";
import Results from "./Results/Results";

const API_KEY = "736cb0f2a5061149d7b43012b1dada7e";

class SearchResults extends Component {
  state = {
    result: "",
    initial: true
  };

  componentDidUpdate = () => {
    const result = decodeURI(this.props.match.params.name);
    // console.log(this.props.match.params.name);
    // console.log(decodeURI(result));
    axios
      .get(
        `
    https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${result}&page=1&include_adult=false`
      )
      .then(res => this.setState({ result: res.data.results }))
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    const result = decodeURI(this.props.match.params.name);

    axios
      .get(
        `
    https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${result}&page=1&include_adult=false`
      )
      .then(res => this.setState({ result: res.data.results }))
      .catch(err => console.log(err));
  };

  onImageClick = () => {
    this.setState({ initial: !this.state.initial });
  };

  Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  render() {
    return (
      <div className="Search">
        <Nav />
        <h1>
          Searching for{" "}
          <span>{this.Capitalize(this.props.match.params.name)}</span>
        </h1>
        {this.state.result !== "" ? (
          <Results
            state={this.state.result}
            click={this.onImageClick}
            initial={this.state.initial}
          />
        ) : (
          <h1>Hello</h1>
        )}
      </div>
    );
  }
}

export default SearchResults;
