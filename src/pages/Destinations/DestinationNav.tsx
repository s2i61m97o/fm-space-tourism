import {NavLink} from "react-router";
import styles from "./DestinationNav.module.scss";

export default function DestinationNav() {
  return (
    <nav className={styles.container}>
      <NavLink
        to="moon"
        className={({isActive}) => (isActive ? styles.active : "")}
      >
        Moon
      </NavLink>
      <NavLink
        to="mars"
        className={({isActive}) => (isActive ? styles.active : "")}
      >
        Mars
      </NavLink>
      <NavLink
        to="europa"
        className={({isActive}) => (isActive ? styles.active : "")}
      >
        Europa
      </NavLink>
      <NavLink
        to="titan"
        className={({isActive}) => (isActive ? styles.active : "")}
      >
        Titan
      </NavLink>
    </nav>
  );
}
