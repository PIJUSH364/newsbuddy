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
          <p className="slogan">Tomorrow’s News Today</p>
        </div>
        <div className="healing-logo">
          <img
            src="https://tpc.googlesyndication.com/simgad/2341795690708377255?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qmtbBH7TuKTyTTRRkbjcQfRUJfVXw"
            alt="advertisement poster"
          />
        </div>
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
