import {NavLink} from "react-router";
import styles from "./CrewNav.module.scss";

export default function CrewNav() {
  return (
    <nav className={styles.crewSelect}>
      <NavLink
        className={({isActive}) => (isActive ? styles.active : undefined)}
        to="/crew/commander"
      >
        1
      </NavLink>
      <NavLink
        className={({isActive}) => (isActive ? styles.active : undefined)}
        to="/crew/mission-specialist"
      >
        2
      </NavLink>
      <NavLink
        className={({isActive}) => (isActive ? styles.active : undefined)}
        to="/crew/pilot"
      >
        3
      </NavLink>
      <NavLink
        className={({isActive}) => (isActive ? styles.active : undefined)}
        to="/crew/flight-engineer"
      >
        4
      </NavLink>
    </nav>
  );
}
