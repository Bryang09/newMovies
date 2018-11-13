import React from "react";

import { Link } from "react-router-dom";

import "./Sub2.scss";

const Sub2 = () => {
  return (
    <div className="Sub2">
      <div className="subImg" />
      <div className="subText">
        <h1>Find The Best Shows</h1>
        <Link to="/shows">
          <h5>Find Shows</h5>
        </Link>
      </div>
    </div>
  );
};

export default Sub2;
