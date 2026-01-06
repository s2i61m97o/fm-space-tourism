import {Link, NavLink} from "react-router";
import logo from "/images/logo.svg";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink to="/">00 Home</NavLink>
        <NavLink to="/destination">01 Destination</NavLink>
        <NavLink to="/crew">02 Crew</NavLink>
        <NavLink to="/technology">03 Technology</NavLink>
      </nav>
    </header>
  );
}
