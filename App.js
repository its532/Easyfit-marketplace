import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sub from "./Sub";
import Home from "./Home";
import Detail from "../views/Detail";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/app" component={Sub}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/how" component={Detail}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// https://marketplace36180.herokuapp.com/
