import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import logo from "../assets/Logo.svg";
import hamburger from "../assets/hamburger_menu.svg";
import "../styles/Header.css";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleHamburgerMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header>
      <a className="icon" href="#" onClick={toggleHamburgerMenu}>
        <img src={hamburger} alt="hamburger" />
      </a>
      <a href="/" className="logo">
        <img src={logo} alt="Little Lemon Logo" />
      </a>
      {(!isMobile || isMenuOpen) && <Nav />}
    </header>
  );
}

export default Header;
