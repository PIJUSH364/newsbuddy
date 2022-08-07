import React from "react";
import "./TopicHighlight.css";

function TopicHighlight(props) {
  return (
    <div className="topicHighlight">
      <div className="highlightText">
        <p>{props.subtitle} </p>
        <h1>{props.title} </h1>
      </div>
    </div>
  );
}

export default TopicHighlight;
