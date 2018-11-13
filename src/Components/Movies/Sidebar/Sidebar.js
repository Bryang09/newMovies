import React, { Component } from "react";

import "./Sidebar.scss";

class Sidebar extends Component {
  state = {
    categories: null
  };

  render() {
    return (
      <div className="Sidebar">
        <h3>Search By Genres</h3>
        <h3 />
      </div>
    );
  }
}

export default Sidebar;
