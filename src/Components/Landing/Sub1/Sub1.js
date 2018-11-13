import React from "react";

import { Link } from "react-router-dom";

import "./Sub1.scss";

const Sub1 = () => {
  return (
    <div className="Sub1">
      <div className="subText">
        <h1>Find Information On The Best Movies</h1>
        <Link to="/movies">
          <h5>Find Movies</h5>
        </Link>
      </div>
      <div className="subImg" />
    </div>
  );
};

export default Sub1;
