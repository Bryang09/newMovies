import React from "react";

import { Link } from "react-router-dom";

const Search = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <form onChange={props.change}>
        <input type="text" placeholder="Type Movie or Show Name" />
      </form>
      <Link
        to={{
          pathname: "/search",
          state: {
            search: props.results
          }
        }}
        style={{ height: "25px", marginLeft: "10px" }}
      >
        <img
          src="https://img.icons8.com/windows/50/ffffff/search.png"
          style={{ height: "25px", color: "#fff" }}
          alt="search"
        />
      </Link>
    </div>
  );
};

export default Search;
