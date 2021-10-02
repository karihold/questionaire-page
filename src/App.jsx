//React
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Landmarks
import Header from 'landmarks/header/header';
import Footer from 'landmarks/footer/footer';
//Pages
import Frontpage from 'pages/frontpage/frontpage';
import Questions from 'pages/questions/questions';
import Result from 'pages/result/result';
//Routes
import Routes from 'routes/routes';
//Styles
import 'scss/base.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={Routes.Home}>
          <Frontpage />
        </Route>
        <Route path={`${Routes.Questions.Root}/:step`}>
          <Questions />
        </Route>
        <Route path={Routes.Result}>
          <Result />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

render(<App />, document.querySelector('#render-target'));
