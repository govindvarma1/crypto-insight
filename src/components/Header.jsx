import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function NavBar() {
  const [resp, setResp] = useState(false);
  function responsive() {
    setResp(!resp);
  }

  return (
    <nav className="navbar">
      <a href="/" style={{ color: "black" }}>
        <h2>CryptoInsight</h2>
      </a>
      <ul className={`navbar-items ${resp === true ? "responsive-nav" : null}`}>
        <button className="nav-btn" onClick={responsive}>
          <FaTimes />
        </button>
        <li onClick={resp === true ? responsive : null}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={resp === true ? responsive : null}>
          <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
        </li>
        <li onClick={resp === true ? responsive : null}>
          <NavLink to="/news">News</NavLink>
        </li>
      </ul>
      <button className="nav-btn" onClick={responsive}>
        <FaBars />
      </button>
    </nav>
  );
}
