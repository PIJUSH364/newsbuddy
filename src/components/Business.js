import React from "react";
import TopicHighlight from "./TopicHighlight";
import "./Business.css";
import Carditem from "./Carditem";

function Business() {
  return (
    <div className="business">
      <div className="title-body">
        <TopicHighlight
          title="Todays top bussiness deal"
          subtitle="Explore statugy of business"
        />
      </div>
      <div className="content-body">
        <div className="card-render">
          <Carditem />
        </div>
      </div>
    </div>
  );
}

export default Business;
