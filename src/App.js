import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import TopNav from "./components/navbar/TopNav";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entertainment from "./components/catagory/Entertainment";
import Business from "./components/catagory/Business";
import General from "./components/catagory/General";
import Health from "./components/catagory/Health";
import Science from "./components/catagory/Science";
import Sports from "./components/catagory/Sports";
import Technology from "./components/catagory/Technology";
// import your route components too

function App() {
  useEffect(() => {
    document.title = "NewsBuddy || Home";
  });

  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/business" element={<Business />}></Route>
          <Route path="/entertainment" element={<Entertainment />}></Route>
          <Route path="/general" element={<General />}></Route>
          <Route path="/health" element={<Health />}></Route>
          <Route path="/science" element={<Science />}></Route>
          <Route path="/sports" element={<Sports />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    //   <TopNav />
    //   <Navbar />
    //   <Carousel />
    //   <Home />
    //   <Footer />
    // </div>
  );
}

export default App;
