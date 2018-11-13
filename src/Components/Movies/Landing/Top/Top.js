import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Top.scss";

class Top extends Component {
  render() {
    const results = this.props.top.results;

    const myResults = [
      { id: 0, result: results[0] },
      { id: 1, result: results[1] },
      { id: 2, result: results[2] },
      { id: 3, result: results[3] },
      { id: 4, result: results[4] }
    ];

    console.log(myResults);

    const top = myResults.map(res => {
      return (
        <div
          className="img"
          key={res.id}
          style={{
            backgroundImage: `url('http://image.tmdb.org/t/p/w500/${
              res.result.poster_path
            }')`
          }}
        >
          <div className="innerText">
            <h3>{res.result.title}</h3>
            <h4>
              {res.result.overview.substring(0, 250)}
              ...
            </h4>{" "}
            <div className="buttons">
              <a
                href={`https://www.themoviedb.org/movie/${res.result.id}`}
                target="_blank "
                rel="noopener noreferrer"
              >
                <h5>More Info</h5>
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="Top">
        <div className="Categories">
          <h2>
            <Link to="/movies/top">Search by Top Rated </Link>
          </h2>

          <div className="categorieImages">{top}</div>
        </div>
      </div>
    );
  }
}

export default Top;
