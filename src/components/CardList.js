import React from "react";
import Carditem from "./Carditem";
import "./CardList.css";
import TopicHighlight from "./TopicHighlight";


function CardList() {
  return (
    <div className="cardAll">
      <TopicHighlight />
      <div className="card-render">
        <Carditem />
      </div>
    </div>
  );
}

export default CardList;
