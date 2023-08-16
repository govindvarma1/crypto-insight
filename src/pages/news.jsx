import axios from "axios";
import { useEffect, useState } from "react";
import articles from "../utils/articles";
import Loading from "../components/Loding";
import NewsCard from "../components/newsCard";

function RenderNews(props) {
  return (
    <div className="news">
      {props.news.map((item, index) => (
        <NewsCard key={index} item={item} />
      ))}
    </div>
  );
}

export default function News() {
  const [news, setNews] = useState(null);
  const API_REQUEST = async () => {
    try {
      const NewsArticles = await axios.get(
        "https://newsapi.org/v2/everything?q=crypto&apiKey=14a16dcaf7544b13a793527bdb3db4ac"
      );
      setNews(NewsArticles.data);
      console.log(news);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    API_REQUEST();
  }, []);

  return (
    <div>
      {articles !== null ? <RenderNews news={articles} /> : <Loading />}
    </div>
  );
}
