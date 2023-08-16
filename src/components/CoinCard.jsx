import React from "react";
import converter from "../utils/converter";
import { Link } from "react-router-dom";

export default function CoinCard(props) {
  const {
    rank,
    uuid,
    name,
    symbol,
    iconUrl,
    marketCap,
    price,
    change
  } = props.coin;
  return (
    <Link to={`/cryptocurrencies/${uuid}`} style={{ color: "black" }}>
      <div className="coin-card" key={uuid}>
        <div className="coin-header">
          <h3>
            {rank}. {name}
          </h3>
          <img src={iconUrl} alt="logo" />
        </div>
        <div className="coin-body">
          <p>Price: {converter(price)}</p>
          <p>symbol: {symbol}</p>
          <p>Market Cap: {converter(marketCap)}</p>
          <span style={{ display: "flex" }}>
            <p>24h Change:</p>
            <p style={{ color: change > 0 ? "#00b060" : "#eb0a25" }}>
              {change}%
            </p>
          </span>
        </div>
      </div>
    </Link>
  );
}
