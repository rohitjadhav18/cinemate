import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { translate } from "../utils/translate";

export default function Navbar({ isScrolled, language, setLanguage }) {
  return (
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""}`}>
        <div className="left">
          <div className="brand">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="links">
            <li><Link to="/">{translate("Home", language)}</Link></li>
            <li><Link to="/tv">{translate("TV Shows", language)}</Link></li>
            <li><Link to="/movies">{translate("Movies", language)}</Link></li>
            <li><Link to="/mylist">{translate("My List", language)}</Link></li>
          </ul>
        </div>

        <div className="right">
          <select
            value={language}
            onChange={(e) => setLanguage && setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: black;
    position: sticky;
    top: 0;
    z-index: 10;
    .left {
      display: flex;
      align-items: center;
      gap: 2rem;
      .brand img { height: 3rem; }
      .links { display: flex; list-style: none; gap: 1rem; li a { color: white; text-decoration: none; } }
    }
    .right select { padding: 0.3rem; border-radius: 4px; }
  }
`;
