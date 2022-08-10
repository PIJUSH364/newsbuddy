import React from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";
import SearchIcon from "@mui/icons-material/Search";

function TopNav() {
  return (
    <div className="topNav">
      <div className="top-points">
        <ul>
          {/* <Link to="/"><li>HOME</li></Link> */}
          <Link to="/">
            <li>HOME</li>
          </Link>
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
