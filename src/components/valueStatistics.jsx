import React from "react";
import converter from "../utils/converter";

export default function ValueStatistics(props) {
  const { name, price, btcPrice, rank, marketCap, allTimeHigh } = props.data;
  return (
    <div className="coin-details-section">
      <h3>Value Statistics</h3>
      <p className="indent">
        An overview showing the statistics of {name}, such as the base and quote
        currency, the rank, and trading volume.
      </p>
      <div className="coin-details-card">
        <p>Price to USD</p>
        <p>{"$ " + converter(price)}</p>
      </div>
      <div className="coin-details-card">
        <p>Price to BTC</p>
        <p>{converter(btcPrice) + " BTC"}</p>
      </div>
      <div className="coin-details-card">
        <p>Coin Rank</p>
        <p>{rank}</p>
      </div>
      <div className="coin-details-card">
        <p>Market Cap</p>
        <p>{"$ " + converter(marketCap)}</p>
      </div>
      <div className="coin-details-card">
        <p>All Time High</p>
        <div>
          <p>{"$ " + converter(allTimeHigh.price)}</p>
          <p className="allTimeHigh-date">
            {new Date(allTimeHigh.timestamp * 1000).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
