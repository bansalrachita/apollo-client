import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import {
  // Login,
  // SignUp,
  UsersListView
} from "../components";

export const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My apollo app</title>
      </Helmet>
      <div className="App">
        <header className="App-header" />
      </div>
      <Router>
        <Switch>
          {/*<Route exact path='/login' component={Login}/>*/}
          {/*<Route exact path='/signup' component={SignUp}/>*/}
          <Route exact path="/" component={UsersListView} />
        </Switch>
      </Router>
    </>
  );
};
