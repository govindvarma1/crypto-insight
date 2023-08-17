import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loding";
import CoinCard from "../components/CoinCard";
import converter from "../utils/converter";
import { v4 as uuidv4 } from "uuid";

const titlesObject = {
  total: "Total Cryptocurrencies",
  totalCoins: "Total Cryptocurrencies",
  totalMarkets: "Total Markets",
  totalExchanges: "Total Exchanges",
  totalMarketCap: "Total Market Cap",
  total24hVolume: "Total 24H Traded Volume"
};

function RenderStats(props) {
  const { stats, coins } = props.data;
  return (
    <>
      <h2 className="indent">Global Cryptocurrency Stats</h2>
      <div className="stats">
        {Object.entries(stats).map(([key, value]) => (
          <div className="stats-card" key={uuidv4()} id={key}>
            <h3>{titlesObject[key]}</h3>
            <p>{converter(value)}</p>
          </div>
        ))}
      </div>
      <div className="title">
        <h3>Top 10 Cryptocurrencies in the world</h3>
        <a className="showMore" href="/cryptocurrencies">
          Show more...
        </a>
      </div>
      <div className="coins">
        {coins
          .map((coin, index) => (
            <CoinCard key={coin.uuid} coin={coin} index={index} />
          ))
          .filter((e, k) => k < 10)}
      </div>
    </>
  );
}

export default function CryptoStats() {
  const [data, setData] = useState(null);

  const API_REQUEST = async () => {
    try {
      const res = await axios.get(
        `https://coinranking1.p.rapidapi.com/coins/?rapidapi-key=1d30f81be4mshcea6c6637402312p19dab9jsn7580fa474e6d`
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    API_REQUEST();
  }, []);

  return (
    <div>
      {data === null ? (
        <Loading />
      ) : (
        <RenderStats data={data.data}></RenderStats>
      )}
    </div>
  );
}
