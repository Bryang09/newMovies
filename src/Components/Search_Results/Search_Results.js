import React from "react";

const Search_Results = props => {
  console.log(props);
  return (
    <div className="Search">
      <h1>{props.location.state.search}</h1>
    </div>
  );
};

export default Search_Results;
