import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsInfo from "./NewsInfo";
import "./News.css";

const News = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const filteredData = [];

  const randomGen = () => {
    return Math.floor(Math.random() * 50);
  };

  // works only on local host
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=9fee024676304f6fa01a60eee032df4c"
  //     )
  //     .then((res) => {
  //       setNewsData(res.data.articles);
  //       setIsLoading(false);
  //       const jsonString = JSON.stringify(res.data.articles);

  //       // Create a Blob from the JSON string
  //       const blob = new Blob([jsonString], { type: "application/json" });

  //       // Trigger the download using FileSaver.js
  //       saveAs(blob, "data.json");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => {
        setNewsData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
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
