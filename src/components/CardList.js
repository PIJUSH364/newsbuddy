import React from "react";
import Carditem from "./Carditem";
import "./CardList.css";

function CardList() {
  return (
    <div className="cardList">
      <div className="card-render">
        <Carditem />
      </div>
    </div>
  );
}

export default CardList;
