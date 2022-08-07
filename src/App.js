import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import TopNav from "./components/navbar/TopNav";

function App() {
  useEffect(() => {
    document.title = "NewsBuddy || Home";
  });

  return (
    <div className="App">
      <TopNav />
      <Navbar />
      <Carousel />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
