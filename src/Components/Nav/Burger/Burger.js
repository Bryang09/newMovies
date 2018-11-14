import React, { Component } from "react";

import "./Burger.scss";

class Burger extends Component {
  render() {
    return (
      <div className="BurgerNav" onClick={this.props.click}>
        {/* <h3 onClick={this.props.click}>&#9776;</h3> */}
        <div
          className="btn"
          style={this.props.burger ? { transform: "translateY(8px)" } : null}
        />
        <div
          className="btn"
          style={this.props.burger ? { transform: "rotate(90deg)" } : null}
        />
        <div
          className="btn"
          style={this.props.burger ? { display: "none" } : null}
        />
      </div>
    );
  }
}

export default Burger;
