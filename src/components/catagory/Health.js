import React, { useEffect } from "react";
import "../CardNew.css";
import TopicHighlight from "../TopicHighlight";
// SAME ABOVE ALL
import { HealthContent } from "./HealthContent";
function Health() {
  useEffect(() => {
    document.title = "NewsBuddy || Health";
  });

  const newPage = "_blank";
  const healthContent = HealthContent.map(({ ...HealthContent }, index) => {
    return (
      <div key={index} className="cardnew">
        <div className="card-body">
          <div
            className="card-img"
            style={{
              backgroundImage: `url(${HealthContent.urlToImage})`,
            }}
          >
            <div className="feed-highlight">
              <span className="channel">{HealthContent.source.name}</span>
            </div>
            <div className="buttom-read">
              <a target={`${newPage}`} href={`${HealthContent.url}`}>
                <button className="read-more">Read more..</button>
              </a>
            </div>
          </div>
          <div className="card-content">
            <h2 className="card-title">
              {" "}
              {HealthContent.title.slice(0, 18)}..
            </h2>
            <p className="card-description">
              {HealthContent.description.slice(0, 122)}...
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
    <div className="health">
      <div className="article-heading">
        {" "}
        <TopicHighlight title="HEALTH" subtitle="Health is Wealth" />
      </div>
      <div className="listOfCard "> {healthContent}</div>
    </div>
  );
}

export default Health;
