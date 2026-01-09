import {NavLink} from "react-router";
import styles from "./DestinationNav.module.scss";

export default function DestinationNav() {
  return (
    <nav className={styles.container}>
      <NavLink
        to="moon"
        className={({isActive}) => (isActive ? "destin-active" : "")}
      >
        Moon
      </NavLink>
      <NavLink
        to="mars"
        className={({isActive}) => (isActive ? "destin-active" : "")}
      >
        Mars
      </NavLink>
      <NavLink
        to="europa"
        className={({isActive}) => (isActive ? "destin-active" : "")}
      >
        Europa
      </NavLink>
      <NavLink
        to="titan"
        className={({isActive}) => (isActive ? "destin-active" : "")}
      >
        Titan
      </NavLink>
    </nav>
  );
}
