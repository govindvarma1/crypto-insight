import axios from "axios";
import { useEffect, useState } from "react";
import articles from "../utils/articles";
import Loading from "../components/Loding";
import NewsCard from "../components/newsCard";

export default function News() {
  const [news, setNews] = useState(undefined);

  function RenderNews(props) {
    return (
      <div className="news">
        {news !== undefined &&
          props.news.map((item, index) => <NewsCard key={index} item={item} />)}
      </div>
    );
  }

  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q: "crypto",
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off"
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "1d30f81be4mshcea6c6637402312p19dab9jsn7580fa474e6d",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com"
    }
  };

  const API_REQUEST = async () => {
    try {
      const { data } = await axios.request(options);
      setNews(data.value);
      console.log(data.value);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    API_REQUEST();
  }, []);

  return (
    <div>{articles !== null ? <RenderNews news={news} /> : <Loading />}</div>
  );
}
