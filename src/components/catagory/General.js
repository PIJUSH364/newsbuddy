import React from "react";
import "../CardNew.css";
import TopicHighlight from "../TopicHighlight";
// SAME ABOVE ALL
import { GeneralContent } from "./GeneralContent";
function General() {
  const newPage = "_blank";
  const generalContent = GeneralContent.map(({ ...GeneralContent }, index) => {
    return (
      <div key={index} className="cardnew">
        <div className="card-body">
          <div
            className="card-img"
            style={{
              backgroundImage: `url(${GeneralContent.urlToImage})`,
            }}
          >
            <div className="feed-highlight">
              <span className="channel">{GeneralContent.source.name}</span>
            </div>
            <div className="buttom-read">
              <a target={`${newPage}`} href={`${GeneralContent.url}`}>
                <button className="read-more">Read more..</button>
              </a>
            </div>
          </div>
          <div className="card-content">
            <h2 className="card-title">
              {" "}
              {GeneralContent.title.slice(0, 18)}..
            </h2>
            <p className="card-description">
              {GeneralContent.description.slice(0, 122)}...
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
    <div className="general">
      <div className="article-heading">
        {" "}
        <TopicHighlight
          title="TODAY General news"
          subtitle="all types of content"
        />
      </div>
      <div className="listOfCard "> {generalContent}</div>
    </div>
  );
}

export default General;
