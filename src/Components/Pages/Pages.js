import React from "react";

import "./Pages.scss";

const Pages = props => {
  console.log(props);
  return (
    <div className="Pages">
      <div className="PagesNavigation">
        <h4
          onClick={props.onOne}
          style={props.One ? { background: "#09bd3d", color: "#fff" } : null}
        >
          1
        </h4>
        <h4
          onClick={props.onTwo}
          style={props.Two ? { background: "#09bd3d", color: "#fff" } : null}
        >
          2
        </h4>
        <h4
          onClick={props.onThree}
          style={props.Three ? { background: "#09bd3d", color: "#fff" } : null}
        >
          3
        </h4>
        <h4
          onClick={props.onFour}
          style={props.Four ? { background: "#09bd3d", color: "#fff" } : null}
        >
          4
        </h4>
        <h4
          onClick={props.onFive}
          style={props.Five ? { background: "#09bd3d", color: "#fff" } : null}
        >
          5
        </h4>
      </div>
    </div>
  );
};

export default Pages;
