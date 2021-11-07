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

  let movies = [
    {
      title: "Jaws",
      img: "https://s26162.pcdn.co/wp-content/uploads/2020/07/Jaws.png",
    },
    {
      title: "The Shining",
      img: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1279,w_2274,x_0,y_133/f_auto,q_auto,w_1100/v1554739619/shape/mentalfloss/55893-warner_home_video3.jpg",
    },
    {
      title: "Major League",
      img: "https://www.tampabay.com/resizer/JNqocfBOr-sZaU86VoyasuTbQa0=/2280x1282/smart/arc-anglerfish-arc2-prod-tbt.s3.amazonaws.com/public/7JZ7LXWLN4I6TFE6IBWI6S7HAY.jpg",
    },
    {
      title: "Scarface",
      img: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1010,w_1800,x_0,y_120/v1554993278/shape/mentalfloss/62429-scarface-featured.jpg?itok=3HZ4I1lf",
    },
  ];

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
