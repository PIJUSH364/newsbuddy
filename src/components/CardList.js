import React from "react";
import CrardNew from "./CrardNew";
import "./CardList.css";
import TopicHighlight from "./TopicHighlight";

function CardList() {
  return (
    <div className="cardAll">
      <TopicHighlight title="THE LATEST NEWS" subtitle="MOST VIEWED ARTICLE" />
      <div className="card-render">
        <CrardNew />
      </div>
    </div>
  );
}

export default CardList;
