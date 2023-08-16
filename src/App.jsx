import { Routes, Route } from "react-router-dom";

import "./styles.css";
import NavBar from "./components/Header";
import CryptoStats from "./pages/CryptoStats";
import Cryptos from "./pages/cryptocurrencies";
import CoinDetails from "./pages/coinDetails";
import Footer from "./components/Footer";
import News from "./pages/news";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<CryptoStats />} />
          <Route path="/cryptocurrencies" element={<Cryptos />} />
          <Route path="/cryptocurrencies/:uuid" element={<CoinDetails />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
