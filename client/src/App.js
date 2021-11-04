import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/detail">
              <Detail />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
