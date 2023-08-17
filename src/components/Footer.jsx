import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <h3>CryptoInsight</h3>
      <p>Copyright &copy; 2023 CryptoInsight, Inc.</p>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
      </ul>
    </div>
  );
}
