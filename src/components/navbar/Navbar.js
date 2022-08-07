import React, { useState } from "react";

import { MenuList } from "./Menulist";
import "./Navbar.css";
function Navbar() {
  const [clicked, setClicked] = useState(false);
  const menulist = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <a exact="true" href={url}>
          {title}
        </a>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="heading-banner">
        <div className="logo">
          <p>
            News🌍<span className="font">Budy</span>{" "}
          </p>
          <p className="slogan">Daily fresh news</p>
        </div>
        <div
          className="healing-logo"
          // style={{
          //   background: `url(${"https://image.shutterstock.com/image-vector/blue-wide-screen-webpage-business-600w-695161762.jpg"})`,
          // }}
        ></div>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list " : "menu-list close "}>
        {menulist}
      </ul>
    </nav>
  );
}

export default Navbar;
