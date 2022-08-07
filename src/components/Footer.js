import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import "./Footer.css";
import TopicHighlight from "./TopicHighlight";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-heading">
        <TopicHighlight subtitle="Global News" title="SEARCH ARTICLES" />
      </div>
      <div className="footer-newsLetter">
        <div className="input">
          <input type="text"  placeholder="Search News"/>
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="icon-header">
        <TopicHighlight subtitle="Get in Touch" title="SOCIAL CONTACT" />
      </div>
      <div className="iconlist">
        <ul>
          <a href="https://www.facebook.com/pijush.roymondal">
            <li>
              {" "}
              <FacebookIcon />
            </li>
          </a>
          <a href="https:/m/pijushrm_24/ ">
            <li>
              <PinterestIcon />
            </li>
          </a>
          <a href="https://wwwshrm_24/">
            <li>
              {" "}
              <TwitterIcon />
            </li>
          </a>
          <a href="https://www.instagram.com/pijushrm_24/">
            <li>
              {" "}
              <InstagramIcon />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/pijush-ray-mondal-621980192/">
            <li>
              <LinkedInIcon />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
