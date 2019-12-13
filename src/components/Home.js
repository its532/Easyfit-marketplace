import React, { Component } from "react";
import gym7 from "../homegym.jpg";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img
          className="back"
          src={gym7}
          width="100%"
          max-width="100%"
          height="auto"
        ></img>
        <div className="text">
          <h1>Easyfit</h1>
          <h2>
            <span></span> An Innovative Dapp That Rewards Your Everyday
            Activity!
          </h2>
        </div>
      </div>
    );
  }
}

export default Home;
