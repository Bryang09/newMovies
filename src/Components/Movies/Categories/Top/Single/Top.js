import React, { Component } from "react";

import "./Top.scss";

class TopMovie extends Component {
  state = {
    initial: true
  };

  onImageClick = () => {
    this.setState({ initial: !this.state.initial });
  };
  render() {
    const top = this.props.top.results;
    const pop = top.map(res => {
      return (
        <div
          className="Movie"
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
            <h2>{res.original_title}</h2>
            <h3>
              <span>
                <img
                  src="https://img.icons8.com/metro/50/e74c3c/rating.png"
                  alt="rating"
                />
                {res.vote_average}
              </span>
            </h3>
            <h3>{res.overview.substring(0, 200)}...</h3>
            <a
              href={`https://www.themoviedb.org/movie/${res.id}`}
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
      <div className={this.state.initial ? "initialCategory" : "Category"}>
        {pop}
      </div>
    );
  }
}

export default TopMovie;
