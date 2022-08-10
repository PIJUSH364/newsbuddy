import React from "react";
import CardList from "./CardList";
import Business from "./catagory/Business";
import Entertainment from "./catagory/Entertainment";
import General from "./catagory/General";
import Health from "./catagory/Health";
import Science from "./catagory/Science";
import Sports from "./catagory/Sports";
import Technology from "./catagory/Technology";
import { Link } from "react-router-dom";
import "./Home.css";
import Carousel from "./Carousel";

function Home() {
  return (
    <div className="home">
      <Carousel />
      <div className="cardlist">
        <CardList />
      </div>
      <div>
        <Business />
      </div>

      <div>
        <Entertainment />
      </div>
      <div>
        {" "}
        <General />
      </div>
      <div>
        {" "}
        <Health />
      </div>
      <div>
        <Science />
      </div>
      <div>
        {" "}
        <Sports />
      </div>
      <div>
        <Technology />
      </div>
    </div>
  );
}

export default Home;
