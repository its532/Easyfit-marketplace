import React, { Component } from "react";

class Detail extends Component {
  render() {
    console.log("gg");
    return (
      <div className="how">
        <h1>How to use</h1>
        <h4>マシンの使い方</h4>
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1ZMlaw3YxSs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <p>0:01~ アブダクター</p>
          <p>0:33~ アドミナルクランチ</p>
          <p>1:05~ エキサイト　ヴァリオ</p>
          <p>1:34~ エキサイト　リクライン</p>
          <p>2:07~ クランチベンチ</p>
          <p>2:35~ ショルダー・プレス</p>
          <p>3:10~ チェストプレス</p>
          <p>4:10~ フォルマバイク</p>
          <p>4:38~ レッグカール</p>
          <p>5:09~ ペクトラル</p>
          <p>5:40~ ラットマシン</p>
          <p>6:13~ レッグエクステンション</p>
          <p>6:41~ レッグプレス</p>
          <p>7:16~ ロータリートーソー</p>
          <p>7:42~ ローロー</p>
          <p>8:13~ ローワーバック</p>
          <p>8:44~ ローワーバックベンチ</p>
          <p>9:17~ ランニングマシン</p>
        </div>
      </div>
    );
  }
}

export default Detail;
