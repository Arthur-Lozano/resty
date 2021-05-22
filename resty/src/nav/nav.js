import './nav.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Nav() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">GET</Link>
            </li>
            <li>
              <Link to="/about">POST</Link>
            </li>
            <li>
              <Link to="/users">PUT</Link>
            </li>
            <li>
              <Link to="/">DELETE</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


