import React, { Component } from "react";

// const API_KEY = "736cb0f2a5061149d7b43012b1dada7e";

class Results extends Component {
  render() {
    const results = this.props.state
      .filter(res => res.poster_path)
      .map(res => {
        return (
          <div
            className="Show"
            key={res.id}
            style={this.props.initial ? { background: "#000" } : null}
          >
            <div
              className={this.props.initial ? "initialImg" : "img"}
              style={{
                backgroundImage: `url('http://image.tmdb.org/t/p/w500/${
                  res.poster_path
                }')`
              }}
              onClick={this.props.click}
            />

            <div className={this.props.initial ? "initialDesc" : "desc"}>
              <h2>{res.name || res.original_title}</h2>
              <h3>
                <span>
                  <img
                    src="https://img.icons8.com/metro/50/e74c3c/rating.png"
                    alt="rating"
                  />
                  {res.vote_average}
                </span>
              </h3>
              <h3>{res.overview.substring(0, 250)}</h3>
              <a
                href={
                  res.media_type === "movie"
                    ? `https://www.themoviedb.org/movie/${res.id}`
                    : `https://www.themoviedb.org/tv/${res.id}`
                }
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
        className={
          this.props.initial ? "initialSearchCategory" : "SearchCategory"
        }
      >
        {results}
      </div>
    );
  }
}

export default Results;
