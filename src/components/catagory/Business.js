import React from "react";
import "../CardNew.css";
import TopicHighlight from "../TopicHighlight";
import { BusinessContent } from "./BusinessContent";
function Business() {
  const newPage = "_blank";
  const businessContent = BusinessContent.map(
    ({ ...BusinessContent }, index) => {
      return (
        <div key={index} className="cardnew">
          <div className="card-body">
            <div
              className="card-img"
              style={{
                backgroundImage: `url(${BusinessContent.urlToImage})`,
              }}
            >
              <div className="feed-highlight">
                <span className="channel">{BusinessContent.source.name}</span>
              </div>
              <div className="buttom-read">
                <a target={`${newPage}`} href={`${BusinessContent.url}`}>
                  <button className="read-more">Read more..</button>
                </a>
              </div>
            </div>
            <div className="card-content">
              <h2 className="card-title">
                {" "}
                {BusinessContent.title.slice(0, 18)}..
              </h2>
              <p className="card-description">
                {BusinessContent.description.slice(0, 122)}...
              </p>
            </div>
            <div className="card-date">
              {/* TIME DESTRUCTUREING REMAINING */}
              <small>last updeed 1hr ago</small>
            </div>
          </div>
        </div>
      );
    }
  );
  return (
    <div className="business">
      <div className="article-heading">
        {" "}
        <TopicHighlight title="BUSINESS" subtitle="Imagination at Work" />
      </div>
      <div className="listOfCard "> {businessContent}</div>
    </div>
  );
}

export default Business;
