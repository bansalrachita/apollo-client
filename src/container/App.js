import React from "react";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import { Helmet } from "react-helmet";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import {
    Login,
    SignUp,
    Users
} from '../components';

const client = React.lazy(() => import("../apollo-store/client"));

export const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My apollo app</title>
        </Helmet>
        <div className="App">
          <header className="App-header"/>
        </div>
          <Switch>
            <Router>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/signup' component={SignUp}/>
                <Route exact path='/users' component={Users}/>
            </Router>
          </Switch>
      </ApolloProvider>
    </>
  );
};
