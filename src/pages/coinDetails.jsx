import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loding";
import ValueStatistics from "../components/valueStatistics";
import Links from "../components/links";
import PriceChart from "../components/priceChart";

function Details(props) {
  const coin = props.data;
  return (
    <div className="coin-details">
      <PriceChart coin={coin} />
      <ValueStatistics data={coin} />
      <div>
        <h3 className="indent">What is {coin.name}</h3>
        <p className="indent">{coin.description}</p>
      </div>
      <Links links={coin.links} />
    </div>
  );
}

export default function CoinDetails() {
  const params = useParams();
  const uuid = params.uuid;
  const [data, setData] = useState(null);

  const API_REQUEST = async () => {
    try {
      const url = `https://coinranking1.p.rapidapi.com/coin/${uuid}/?rapidapi-key=1d30f81be4mshcea6c6637402312p19dab9jsn7580fa474e6d`;
      const res = await axios.get(url);
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    API_REQUEST();
  }, []);

  if (data === null) {
    return <Loading />;
  } else {
    return <Details data={data.coin} />;
  }
}
