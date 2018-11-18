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
      className="searchBar"
    >
      <form onChange={props.change}>
        <input type="text" placeholder="Type Movie or Show Name" />

        <Link
          to={{
            pathname: `/search/${props.results}`,
            state: {
              search: props.results
            }
          }}
          style={{ height: "25px", marginLeft: "10px" }}
        >
          {" "}
          <button
            type="submit"
            style={{ height: 0, width: 0, padding: 0, border: 0 }}
          />
          <img
            src="https://img.icons8.com/windows/50/ffffff/search.png"
            style={{ height: "25px", color: "#fff" }}
            alt="search"
            type="submit"
          />
        </Link>
      </form>
    </div>
  );
};

export default Search;
