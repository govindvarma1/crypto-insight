import axios from "axios";
import React, { useEffect, useState } from "react";
import CoinCard from "../components/CoinCard";

export default function Cryptos() {
  const [Crypto, setCrypto] = useState(null);
  const [display, setDisplay] = useState(null);
  const [name, setName] = useState("");
  const [select, setSelect] = useState("none");

  const API_REQUEST = async () => {
    try {
      const res = await axios.get(
        `https://coinranking1.p.rapidapi.com/coins/?rapidapi-key=1d30f81be4mshcea6c6637402312p19dab9jsn7580fa474e6d`
      );
      setCrypto(res.data.data.coins);
      setDisplay(res.data.data.coins);
    } catch (err) {
      console.log(err);
    }
  };

  function handleChange(event) {
    setName(event.target.value);
    setDisplay(
      Crypto.filter((f) =>
        f.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
    console.log(event.target.value);
    event.preventDefault();
  }

  function handleSelectChange(event) {
    const value = event.target.value;
    setSelect(value);
    const NChange = Crypto.filter((item) => item.change <= "0");
    const PChange = Crypto.filter((item) => item.change > "0");
    if (value === "none") {
      setDisplay(Crypto);
    } else if (value === "toploser") {
      PChange.sort((a, b) => {
        return a.change > b.change ? 1 : -1;
      });
      NChange.sort((a, b) => {
        return a.change < b.change ? 1 : -1;
      });
      setDisplay([...NChange, ...PChange]);
    } else {
      NChange.sort((a, b) => {
        return a.change > b.change ? 1 : -1;
      });
      PChange.sort((a, b) => {
        return a.change < b.change ? 1 : -1;
      });
      setDisplay([...PChange, ...NChange]);
    }
    console.log(value);
  }

  function Render() {
    return (
      <div>
        <div className="sort">
          <input
            onChange={handleChange}
            type="text"
            placeholder="search cryptocurrency"
            className="crypto-search"
            value={name}
            autoFocus={true}
          />
          <select
            name="gainers"
            id="gainer"
            value={select}
            onChange={handleSelectChange}
          >
            <option value="none">None</option>
            <option value="topgainer">Top Gainers</option>
            <option value="toploser">Top Losers</option>
          </select>
        </div>
        <div className="coins">
          {display.map((coin, index) => (
            <CoinCard key={coin.uuid} coin={coin} index={index} />
          ))}
        </div>
      </div>
    );
  }

  useEffect(() => {
    API_REQUEST();
  }, []);
  return <div>{Crypto !== null ? <Render /> : null}</div>;
}
