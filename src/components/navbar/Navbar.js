import React, { useState } from "react";
// import { Link } from "react-router-dom";
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
      <div className="logo">
        <p>
          NEWS<span className="font">Buddy</span>{" "}
        </p>
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
