import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Frontpage from "pages/frontpage/frontpage";
import Header from "landmarks/header/header";
import Footer from "landmarks/footer/footer";
import "scss/base.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Frontpage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

render(<App />, document.querySelector("#render-target"));
