import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loding";
import { Line } from "react-chartjs-2";
import converter from "../utils/converter";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function PriceChart({ coin }) {
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState("24h");
  const [change, setChange] = useState(0);

  function handleSelectChange(event) {
    const value = event.target.value;
    setDays(value);
  }

  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${coin.uuid}/history`,
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: days
    },
    headers: {
      "X-RapidAPI-Key": "1d30f81be4mshcea6c6637402312p19dab9jsn7580fa474e6d",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
    }
  };

  async function fetchHistoricalData() {
    const { data } = await axios.request(options);
    setHistoricalData(data.data.history.reverse());
    setChange(data.data.change);
  }

  useEffect(() => {
    fetchHistoricalData();
  }, [days, change]);

  function color() {
    if (change > "0") {
      return "#00b060";
    } else {
      return "#F32013";
    }
  }

  return (
    <div className="coin-details-section">
      <div className="chart-header">
        <h3 className="indent">{coin.name} Price Chart</h3>
        <div>
          <select name="days" onChange={handleSelectChange}>
            <option value="24h" name="24h">
              24 Hours
            </option>
            <option value="7d" name="7d">
              7 Days
            </option>
            <option value="30d" name="30d">
              1 Month
            </option>
            <option value="1y" name="1y">
              1 year
            </option>
          </select>
          <div>
            <p>change: {change} %</p>
            <p>Current Price: ${converter(coin.price)}</p>
          </div>
        </div>
      </div>
      {!historicalData ? (
        <Loading />
      ) : (
        <div className="chart">
          <Line
            data={{
              labels: historicalData.map((coin) => {
                let date = new Date(coin.timestamp * 1000);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === "24h" ? time : date.toLocaleDateString();
              }),
              datasets: [
                {
                  label: `Price in USD`,
                  data: historicalData.map((coin) => coin.price),
                  borderColor: () => color(),
                  backgroundColor: () => color(),
                  borderWidth: 2,
                  tension: 0.4
                  // fill: true
                }
              ]
            }}
            options={{
              responsive: true,
              elements: {
                point: {
                  radius: 0
                }
              }
            }}
          />
        </div>
      )}
    </div>
  );
}
