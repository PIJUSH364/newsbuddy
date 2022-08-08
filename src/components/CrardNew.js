import React from "react";
import "./CardNew.css";
import { NewsContent } from "./NewsContent";
function CrardNew() {
  const newPage = "_blank";
  const newsContent = NewsContent.map(({ ...NewsContent }, index) => {
    return (
      <div key={index} className="cardnew">
        <div className="card-body">
          <div
            className="card-img"
            style={{
              backgroundImage: `url(${NewsContent.urlToImage})`,
            }}
          >
            <div className="feed-highlight">
              <span className="channel">{NewsContent.source.name}</span>
            </div>
            <div className="buttom-read">
              <a target={`${newPage}`} href={`${NewsContent.url}`}>
                <button className="read-more">Read more..</button>
              </a>
            </div>
          </div>
          <div className="card-content">
            <h2 className="card-title"> {NewsContent.title.slice(0, 18)}..</h2>
            <p className="card-description">
              {NewsContent.description.slice(0, 122)}...
            </p>
          </div>
          <div className="card-date">
            {/* TIME DESTRUCTUREING REMAINING */}
            <small>last updeed 1hr ago</small>
          </div>
        </div>
      </div>
    );
  });
  return <div className="listOfCard">{newsContent}</div>;
}

export default CrardNew;
