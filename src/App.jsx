import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import "./styles.css";
const NavBar = lazy(() => import("./components/Header"));
const CryptoStats = lazy(() => import("./pages/CryptoStats"));
const Cryptos = lazy(() => import("./pages/cryptocurrencies"));
const CoinDetails = lazy(() => import("./pages/coinDetails"));
const Footer = lazy(() => import("./components/Footer"));
const News = lazy(() => import("./pages/news"));

export default function App() {
  return (
    <>
      <Suspense fallback={<></>}>
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
      </Suspense>
    </>
  );
}
