// Static importing
import React from "react";
import { Switch, Route } from "react-router-dom";
// Dynamic importing
const Home = React.lazy(() => import("../components/Home"));
const ABoutUs = React.lazy(() => import("../components/AboutUs"));

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/aboutus" render={() => <ABoutUs />} />
    </Switch>
  );
};

export default AppRoutes;
