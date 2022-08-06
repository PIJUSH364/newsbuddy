import React, { useEffect } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import Axio from "./components/Axio";

function App() {
  useEffect(() => {
    document.title = "NewsBuddy || Home";
  });

  return (
    <div className="App">
      {/* <Axio /> */}
      <Navbar />
      <Carousel />
      <Home />
    </div>
  );
}

export default App;
