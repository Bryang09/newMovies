import React from "react";

import { Switch, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Search from "./Components/Search_Results/Search_Results";
import Movies from "./Components/Movies/Movies";
import Shows from "./Components/Shows/Shows";
import Popular from "./Components/Movies/Categories/Popular/Popular";
import Top from "./Components/Movies/Categories/Top/Top";
import Theaters from "./Components/Movies/Categories/Theater/Theater";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/shows" component={Shows} />
        <Route exact path="/movies/popular" component={Popular} />
        <Route exact path="/movies/top" component={Top} />
        <Route exact path="/movies/theaters" component={Theaters} />
      </Switch>
    </div>
  );
};

export default Routes;
