import React, { useEffect } from "react";
import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Business from "./components/Business";
import Entertainment from "./components/Entertainment";
import General from "./components/General";
import Health from "./components/Health";
import Science from "./components/Science";
import Sports from "./components/Sports";
import Technology from "./components/Technology";
import Carousel from "./components/Carousel";
// import Axio from "./components/Axio";

function App() {
  useEffect(() => {
    document.title = "NewsBuddy || Home";
  });
  console.log("hi");
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      {/* <Carosu/> */}
      {/* <Home /> */}
      {/* <Business />
      <Entertainment />
      <General />
      <Health />
      <Science />
      <Sports />
      <Technology /> */}
    </div>
  );
}

export default App;
