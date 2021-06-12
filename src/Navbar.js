import React from "react";
import { links } from "./data";
import logo from "./Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

import "./App.css";
import { useState } from "react";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const showDropdownNavbar = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav>
      <div className="nav-header">
        <div className="logo-container">
          <img src={logo} className="logo" />
        </div>
        <div className="nav-links-container">
          <ul className={showLinks ? "show-links" : "nav-links-list"}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li className="nav-link" key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="hamburger-icon">
        <button onClick={showDropdownNavbar}>
          {showLinks ? <ImCross /> : <GiHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
