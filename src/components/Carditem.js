import React from "react";
import card from "../images/cd.jpg";
import Axio from "./Axio";
import "./CardItem.css";
import { NewsContent } from "./NewsContent";

function Carditem() {
  const newsContent = NewsContent.map(({ id }, index) => {
    return (
      <h1 key={index}>{id}ohi</h1>
      // <div className="news-cardItem">
      //   <div className="news-card-body">
      //     <div
      //       className="news-card-img"
      //       style={{
      //         background: `url(${card})`,
      //       }}
      //     >
      //       {/* <figure>
      //         <img src={card} alt="" />
      //       </figure> */}
      //     </div>
      //     <div className="news-card-title">
      //       <h5 className="news-card-title">{NewsContent.id}</h5>
      //     </div>
      //     <div className="news-card-description">
      //       <p className="news-card-text">
      //         This is a wider card with supporting text below as a natural
      //         lead-in to additional content. This content is a little bit
      //         longer.
      //       </p>
      //     </div>
      //     <div className="news-card-history text-muted">
      //       <p className="news-status">
      //         <small>Last updated 3 mins ago</small>
      //       </p>
      //     </div>
      //   </div>
      // </div>
    );
  });
  return (
    <>
      <Axio />
    </>
  );
}

export default Carditem;
