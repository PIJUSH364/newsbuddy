import React from "react";
import Carditem from "./Carditem";
import "./CardList.css";
import TopicHighlight from "./TopicHighlight";

function CardList() {
  return (
    <div className="cardAll">
      <TopicHighlight title="TODAY HOT NEWS" subtitle="MOST VIEWED ARTICLE" />
      <div className="card-render">
        <Carditem />
      </div>
    </div>
  );
}

export default CardList;
