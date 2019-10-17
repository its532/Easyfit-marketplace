import React, { Component } from "react";

class Detail extends Component {
  render() {
    console.log("gg");
    return (
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1ZMlaw3YxSs"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default Detail;
