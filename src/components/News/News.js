import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsInfo from "./NewsInfo";
import "./News.css";

const News = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const filteredData = [];

  const randomGen = () => {
    return Math.floor(Math.random() * 100);
  };

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=9fee024676304f6fa01a60eee032df4c"
      )
      .then((res) => {
        setNewsData(res.data.articles); // Set the actual news articles array
        setIsLoading(false); // Update isLoading state to false
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  for (let i = 0; i < 10; i++) {
    filteredData.push(newsData[randomGen()]);
  }
  setInterval(() => {
    for (let i = 0; i < 10; i++) {
      filteredData.push(newsData[randomGen()]);
    }
  }, 5000 * 60);

  return (
    <div>
      <h1 className="crypto-news-h1">CryptoCurrency News</h1>
      {isLoading ? (
        <p>Loading news...</p>
      ) : (
        filteredData.map((news, i) => (
          <React.Fragment key={i}>
            <NewsInfo
              title={news.title}
              description={news.description}
              url={news.url}
            />
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default News;
