import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "src/features/home/Home";
import About from "src/features/about/About";
import TodosPage from "src/features/todos/TodosPage";

export default function AppRoutes() {
  return (
    <div>
      <ul className="nav-links">
        <li className="nav-links-item"><a href="/">Home</a></li>
        <li className="nav-links-item"><a href="/about">About</a></li>
        <li className="nav-links-item"><a href="/todo">Todo</a></li>
      </ul>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" render={() => <Redirect to={"/home"} />} />
          <Route exact path="/about" component={About} />
          <Route exact path="/todo" component={TodosPage} />
          <Route
            render={() => {
              return <h1>404</h1>;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}
