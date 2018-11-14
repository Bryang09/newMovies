import React from "react";

import Hero from "./Hero/Hero";
// import Sub1 from "./Sub1/Sub1";
// import Sub2 from "./Sub2/Sub2";
import Nav from "../Nav/Nav";

const Landing = () => {
  return (
    <div className="Landing">
      <Nav />
      <Hero />
      {/* <Sub1 />
      <hr />
      <Sub2 /> */}
    </div>
  );
};

export default Landing;
