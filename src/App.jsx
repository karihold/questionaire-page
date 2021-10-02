//React
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Landmarks
import Header from "landmarks/header/header";
import Footer from "landmarks/footer/footer";
//Pages
import Frontpage from "pages/frontpage/frontpage";
import Questions from 'pages/questions/questions';
import Result from 'pages/result/result';
//Styles
import "scss/base.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Frontpage />
        </Route>
        <Route path="/questions">
          <Questions/>
        </Route>
        <Route path="/result">
          <Result/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

render(<App />, document.querySelector("#render-target"));
