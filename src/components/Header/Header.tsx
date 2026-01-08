import {useState} from "react";
import {Link, NavLink} from "react-router";
import clsx from "clsx";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";
import useScreenSize from "../../hooks/useScreenSize";
import styles from "./Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navStyles = clsx(
    styles.header__nav,
    useScreenSize() > 767
      ? styles.header__navbar
      : clsx(styles.header__offcanvas, menuOpen && styles.header__offcanvasOpen)
  );

  const activeStyle =
    useScreenSize() > 767
      ? {borderBottom: "3px solid white"}
      : {borderRight: "3px solid white"};

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      {useScreenSize() > 1023 && <hr />}
      {useScreenSize() < 768 && (
        <img
          src={menuOpen ? close : hamburger}
          alt="menu open icon"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
        />
      )}
      <div className={navStyles}>
        <nav className={styles.header__navMenu} id="nav-menu">
          <NavLink to="/" style={({isActive}) => (isActive ? activeStyle : {})}>
            <span>00</span> Home
          </NavLink>
          <NavLink
            to="/destination"
            style={({isActive}) => (isActive ? activeStyle : {})}
          >
            <span>01</span> Destination
          </NavLink>
          <NavLink
            to="/crew"
            style={({isActive}) => (isActive ? activeStyle : {})}
          >
            <span>02</span> Crew
          </NavLink>
          <NavLink
            to="/technology"
            style={({isActive}) => (isActive ? activeStyle : {})}
          >
            <span>03</span> Technology
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
