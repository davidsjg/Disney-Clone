import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMovies } from "./features/movie/movieSlice";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Login from "./components/Login/Login";

function App() {
  const dispatch = useDispatch();

  let movies = ["Jaws", "The Shining", "Major League", "The Godfather"];

  useEffect(() => {
    dispatch(setMovies(movies));
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/detail/:movie">
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
