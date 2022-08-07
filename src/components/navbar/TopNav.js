import React from "react";
import "./TopNav.css";
import SearchIcon from "@mui/icons-material/Search";

function TopNav() {
  return (
    <div className="topNav">
      <div className="top-points">
        <ul>
          <a href="#">
            <li>HOME</li>
          </a>
          <a href="#">
            <li>ACHIEVED</li>
          </a>
          <a href="#">
            <li>CONTACT</li>
          </a>
        </ul>
      </div>
      <div className="search-article">
        <input type="text" placeholder="Search" />
        <button className="searchIconButton-article">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default TopNav;
