"use client";
// import Link from "next/link";
import "./Navbar.scss";
import { FaSun } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../context/context";
import { Link } from "react-scroll";

const Navbar = () => {
  const { theme, toggleTheme, nav, navHandle } = useContext(ThemeContext);

  // Memoize class name to prevent unnecessary re-renders
  const navbarClass = useMemo(() => `navbar ${theme}`, [theme]);

  return (
    <nav className={navbarClass}>
      <Link href="/" passHref>
        <h1 className="navbar-brand">Dr. Sherif</h1>
      </Link>

      <ul className={`nav-links ${nav}`}>
        <li>
          <Link to="main" aria-label="Go to Home"
              smooth={true}>Home</Link>
        </li>
        <li>
          <Link to="about" aria-label="Go to About"
              smooth={true}>About</Link>
        </li>
        <li>
          <Link to="services" aria-label="Go to Services"
              smooth={true}>Services</Link>
        </li>
        <li>
          <Link to="contact" aria-label="Go to Contact"
              smooth={true}>Contact</Link>
        </li>
      </ul>

      <div className="toggle-theme">
        <button
          className="theme-button sun-icon"
          onClick={() => {
            toggleTheme("dark");
          }}
        >
          <FaSun />
        </button>

        <button
          className="theme-button moon-icon"
          onClick={() => {
            toggleTheme("light");
          }}
        >
          <FiMoon />
        </button>

        {/* mobile */}
        <label className="hamburger">
          <input type="checkbox" onChange={navHandle} />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            />
            <path className="line" d="M7 16 27 16" />
          </svg>
        </label>
        {/* end mobile */}
      </div>
    </nav>
  );
};

export default Navbar;
