import {NavLink} from "react-router";
import styles from "./DestinationNav.module.scss";

export default function DestinationNav() {
  return (
    <nav className={styles.container}>
      <NavLink
        to="/destination/moon"
        className={({isActive}) => (isActive ? styles.active : "")}
      >
        Moon
      </NavLink>
      <NavLink
        to="/destination/mars"
        className={({isActive}) => (isActive ? styles.active : "")}
      >
        Mars
      </NavLink>
      <NavLink
        to="/destination/europa"
        className={({isActive}) => (isActive ? styles.active : "")}
      >
        Europa
      </NavLink>
      <NavLink
        to="/destination/titan"
        className={({isActive}) => (isActive ? styles.active : "")}
      >
        Titan
      </NavLink>
    </nav>
  );
}
