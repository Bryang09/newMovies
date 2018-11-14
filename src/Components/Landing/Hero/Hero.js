import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Hero.scss";

class Hero extends Component {
  state = {
    tv: false,
    movies: false
  };

  onTv = () => {
    this.setState({ tv: true });
  };
  onNotTv = () => {
    this.setState({ tv: false });
  };
  onMovies = () => {
    this.setState({ movies: true });
  };

  onNotMovies = () => {
    this.setState({ movies: false });
  };

  render() {
    const tv =
      "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/54/k8/p054k8mk.jpg";

    const movies =
      "http://images.amcnetworks.com/amc.com/wp-content/uploads/2017/09/the-walking-dead-season-8-key-art-rick-lincoln-daryl-reedus-1200x707.jpg";

    return (
      <div
        className="Hero"
        style={
          this.state.tv
            ? {
                background: `linear-gradient(rgba(0,0,0,0.6) , rgba(0,0,0,0.6)),url(${movies})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }
            : this.state.movies
            ? {
                background: `linear-gradient(rgba(0,0,0,0.6) , rgba(0,0,0,0.6)),url(${tv})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }
            : null
        }
      >
        <h1>
          Welocome to <span>IMBG</span>
        </h1>
        <div className="options">
          <Link to="/movies">
            <h3 onMouseEnter={this.onMovies} onMouseLeave={this.onNotMovies}>
              Movies
            </h3>
          </Link>
          <Link to="/shows">
            <h3 id="tv" onMouseEnter={this.onTv} onMouseLeave={this.onNotTv}>
              TV
            </h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default Hero;
