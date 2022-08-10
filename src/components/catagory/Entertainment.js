import React, { useEffect } from "react";
import "../CardNew.css";
import TopicHighlight from "../TopicHighlight";
// SAME ABOVE ALL
import { EntertainmentContent } from "./EntertainmentContent";

function Entertainment() {
  useEffect(() => {
    document.title = "NewsBuddy || Entertainment";
  });

  const newPage = "_blank";
  const entertainmentContent = EntertainmentContent.map(
    ({ ...EntertainmentContent }, index) => {
      return (
        <div key={index} className="cardnew">
          <div className="card-body">
            <div
              className="card-img"
              style={{
                backgroundImage: `url(${EntertainmentContent.urlToImage})`,
              }}
            >
              <div className="feed-highlight">
                <span className="channel">
                  {EntertainmentContent.source.name}
                </span>
              </div>
              <div className="buttom-read">
                <a target={`${newPage}`} href={`${EntertainmentContent.url}`}>
                  <button className="read-more">Read more..</button>
                </a>
              </div>
            </div>
            <div className="card-content">
              <h2 className="card-title">
                {" "}
                {EntertainmentContent.title.slice(0, 18)}..
              </h2>
              <p className="card-description">
                {EntertainmentContent.description.slice(0, 122)}...
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
    <div className="entertainment">
      <div className="article-heading">
        {" "}
        <TopicHighlight
          title="ENTERTEDMENT"
          subtitle="Entertaining is the responsibility"
        />
      </div>
      <div className="listOfCard "> {entertainmentContent}</div>
    </div>
  );
}

export default Entertainment;
