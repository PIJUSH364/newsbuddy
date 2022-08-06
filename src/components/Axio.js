import axios from "axios";
import { useEffect } from "react";
import { NewsContent } from "./NewsContent";
import "./CardItem.css";
import card from "../images/cd.jpg";

function Axio() {
  const newsContent = NewsContent.map(({ ...NewsContent }, index) => {
    return (
      // <div key={index}>
      <div key={index} className="news-cardItem">
        <div className="news-card-body">
          <div
            className="news-card-img"
            style={{
              background: `url(${card})`,
            }}
          >
            {/* <figure>
              <img src={card} alt="" />
            </figure> */}
          </div>
          <div className="news-card-title">
            <h5 className="news-card-title">{NewsContent.id}</h5>
          </div>
          <div className="news-card-description">
            <p className="news-card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div className="news-card-history text-muted">
            <p className="news-status">
              <small>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      // </div>
    );
  });
  return (
    <div>
      <ul>{newsContent}</ul>
    </div>
  );
}

export default Axio;
