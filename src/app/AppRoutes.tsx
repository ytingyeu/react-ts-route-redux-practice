import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "src/pages/Home";
import About from "src/pages/About";
import TodoPage from "src/features/todos/TodoPage";

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" render={() => <Redirect to={"/home"} />} />
        <Route exact path="/about" component={About} />
        <Route exact path="/todo" component={TodoPage} />
        <Route
          render={() => {
            return <h1>404</h1>;
          }}
        />
      </Switch>
    </Router>
  );
}
