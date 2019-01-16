import React, { Component } from "react";

import "./Popular.scss";

class PopularShow extends Component {
  state = {
    initial: true
  };

  onImageClick = () => {
    this.setState({ initial: !this.state.initial });
  };
  render() {
    const popular = this.props.popular.results;
    const pop = popular
      .filter(res => res.poster_path)
      .map(res => {
        return (
          <div
            className="Show"
            key={res.id}
            style={this.state.initial ? { background: "#000" } : null}
          >
            <div
              className={this.state.initial ? "initialImg" : "img"}
              style={{
                backgroundImage: `url('http://image.tmdb.org/t/p/w500/${
                  res.poster_path
                }')`
              }}
              onClick={this.onImageClick}
            />

            <div className={this.state.initial ? "initialDesc" : "desc"}>
              <h2>{res.name}</h2>
              <h3>
                <span>
                  <img
                    src="https://img.icons8.com/metro/50/e74c3c/rating.png"
                    alt="rating"
                  />
                  {res.vote_average}
                </span>
              </h3>
              <h3>{res.overview.substring(0, 250)}...</h3>
              <a
                href={`https://www.themoviedb.org/tv/${res.id}`}
                target="_blank "
                rel="noopener noreferrer"
              >
                <h5>Read More</h5>
              </a>
            </div>
          </div>
        );
      });
    return (
      <div
        className={this.state.initial ? "initialShowCategory" : "ShowCategory"}
      >
        {pop}
      </div>
    );
  }
}

export default PopularShow;
