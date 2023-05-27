import React from "react";
import TemporaryDrawer from "./drawer";
import "./styles.css";
import Button from "../Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="logo">
          CryptoInfo<span style={{ color: "var(--orange)" }}>.</span>
        </h1>
      </Link>
      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <Button text="Dashboard" />
        </Link>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
