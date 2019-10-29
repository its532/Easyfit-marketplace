import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import gym7 from "../homegym.jpg";
// import { url } from "inspector";

class Home extends Component {
  render() {
    // const rp = require("request-promise");
    // const requestOptions = {
    //   method: "GET",
    //   uri:
    //     "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    //   qs: {
    //     start: "1",
    //     limit: "5000",
    //     convert: "USD"
    //   },
    //   headers: {
    //     "X-CMC_PRO_API_KEY": "9453b00f-a58f-4529-a12f-51e2cfc292c6"
    //   },
    //   json: true,
    //   gzip: true
    // };

    // rp(requestOptions)
    //   .then(response => {
    //     console.log("API call response:", response);
    //   })
    //   .catch(err => {
    //     console.log("API call error:", err.message);
    //   });
    return (
      // <button className="btn btn-default" style={{background-image:url("gray")}}/>
      //   <button className="btn btn-default" style={btnstyle} />
      //     <div clasName="sample2c style={back}"></div>

      //   <div class="sample2cBack">DRAFT</div>

      //   <div class="sample2cFront">背景透かし文字を<br>アニメーションで<br>ブリンクする</div>
      // </div>
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
