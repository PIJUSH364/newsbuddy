import React from "react";
import CardList from "./CardList";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-title">
        <p className="news-title">Todays - Highlight</p>
      </div>
      <div className="cardlist">
        <CardList/>
      </div>
    </div>
  );
}

export default Home;
