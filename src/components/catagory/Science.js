import React from "react";
import "../CardNew.css";
import TopicHighlight from "../TopicHighlight";
// SAME ABOVE ALL
import { ScienceContent } from "./ScienceContent";
function Science() {
  const newPage = "_blank";
  const scienceContent = ScienceContent.map(({ ...ScienceContent }, index) => {
    return (
      <div key={index} className="cardnew">
        <div className="card-body">
          <div
            className="card-img"
            style={{
              backgroundImage: `url(${ScienceContent.urlToImage})`,
            }}
          >
            <div className="feed-highlight">
              <span className="channel">{ScienceContent.source.name}</span>
            </div>
            <div className="buttom-read">
              <a target={`${newPage}`} href={`${ScienceContent.url}`}>
                <button className="read-more">Read more..</button>
              </a>
            </div>
          </div>
          <div className="card-content">
            <h2 className="card-title">
              {" "}
              {ScienceContent.title.slice(0, 18)}..
            </h2>
            <p className="card-description">
              {ScienceContent.description.slice(0, 122)}...
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
    <div className="science">
      <div className="article-heading">
        {" "}
        <TopicHighlight title="TODAY science " subtitle="evoluton of science" />
      </div>
      <div className="listOfCard "> {scienceContent}</div>
    </div>
  );
}

export default Science;
