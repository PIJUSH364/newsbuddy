import React, { useEffect } from "react";

import "../CardNew.css";
import TopicHighlight from "../TopicHighlight";
import { SportsContent } from "./SportsContent";

function Sports() {
  useEffect(() => {
    document.title = "NewsBuddy || Sports";
  });

  const newPage = "_blank";
  const sportsContent = SportsContent.map(({ ...SportsContent }, index) => {
    return (
      <div key={index} className="cardnew">
        <div className="card-body">
          <div
            className="card-img"
            style={{
              backgroundImage: `url(${SportsContent.urlToImage})`,
            }}
          >
            <div className="feed-highlight">
              <span className="channel">{SportsContent.source.name}</span>
            </div>
            <div className="buttom-read">
              <a target={`${newPage}`} href={`${SportsContent.url}`}>
                <button className="read-more">Read more..</button>
              </a>
            </div>
          </div>
          <div className="card-content">
            <h2 className="card-title">
              {" "}
              {SportsContent.title.slice(0, 18)}..
            </h2>
            <p className="card-description">
              {SportsContent.description.slice(0, 122)}...
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
  return (
    <div className="sportsContent">
      <div className="article-heading">
        {" "}
        <TopicHighlight title="SPORTS" subtitle="Defend til the End" />
      </div>
      <div className="listOfCard "> {sportsContent}</div>
    </div>
  );
}

export default Sports;
