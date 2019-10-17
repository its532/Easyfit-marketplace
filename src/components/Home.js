import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import gym7 from "../homegym.jpg";
// import { url } from "inspector";

class Home extends Component {
  render() {
    return (
      // <button className="btn btn-default" style={{background-image:url("gray")}}/>
      //   <button className="btn btn-default" style={btnstyle} />
      //     <div clasName="sample2c style={back}"></div>

      //   <div class="sample2cBack">DRAFT</div>

      //   <div class="sample2cFront">背景透かし文字を<br>アニメーションで<br>ブリンクする</div>
      // </div>

      <img class="back" src={gym7} width="1700px"></img>
    );
  }
}

export default Home;
