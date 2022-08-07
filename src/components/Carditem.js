import { NewsContent } from "./NewsContent";
import "./CardItem.css";
// import card from "../images/cd.jpg";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

function Carditem() {
  const newsContent = NewsContent.map(({ ...NewsContent }, index) => {
    const timeAgo = new TimeAgo(`${NewsContent.publishedAt}`);
    const currenTime = timeAgo.format(Date.now() - 1.5 * 60 * 1000, "round");

    return (
      <div key={index} className="news-cardItem">
        <a href={`${NewsContent.url}`}>
          <div className="news-card-body">
            <div
              className="news-card-img"
              style={{
                background: `url(${NewsContent.urlToImage})`,
              }}
            >
              <div className="feed-highlight">
                <span className="channel">{NewsContent.source.name}</span>
              </div>
              <div className="buttom-read">
                <button className="read-more">Read more..</button>
              </div>
            </div>
            <div className="news-card-title">
              <h5 className="news-card-title">
                {NewsContent.title.slice(0, 12)}...
              </h5>
            </div>
            <div className="news-card-description">
              <p className="news-card-text">
                {NewsContent.description.slice(0, 122)}...
              </p>
            </div>
            <div className="news-card-history text-muted">
              <p className="news-status">
                <small>Last updated on {currenTime}</small>
              </p>
            </div>
          </div>
        </a>
      </div>
    );
  });
  return <div className="listOfCard">{newsContent}</div>;
}

export default Carditem;
