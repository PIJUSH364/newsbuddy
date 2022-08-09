import React from "react";
import "../CardNew.css";
import TopicHighlight from "../TopicHighlight";
// SAME ABOVE ALL
import { TechnologyContent } from "./TechnologyContent";
function Technology() {
  const newPage = "_blank";
  const technologyContent = TechnologyContent.map(
    ({ ...TechnologyContent }, index) => {
      return (
        <div key={index} className="cardnew">
          <div className="card-body">
            <div
              className="card-img"
              style={{
                backgroundImage: `url(${TechnologyContent.urlToImage})`,
              }}
            >
              <div className="feed-highlight">
                <span className="channel">{TechnologyContent.source.name}</span>
              </div>
              <div className="buttom-read">
                <a target={`${newPage}`} href={`${TechnologyContent.url}`}>
                  <button className="read-more">Read more..</button>
                </a>
              </div>
            </div>
            <div className="card-content">
              <h2 className="card-title">
                {" "}
                {TechnologyContent.title.slice(0, 18)}..
              </h2>
              <p className="card-description">
                {TechnologyContent.description.slice(0, 122)}...
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
    <div className="technology">
      <div className="article-heading">
        {" "}
        <TopicHighlight
          title="TECHNOLOGY"
          subtitle="Innovate-connect-inspire"
        />
      </div>
      <div className="listOfCard "> {technologyContent}</div>
    </div>
  );
}

export default Technology;
