import {NavLink} from "react-router";
import styles from "./TechNav.module.scss";

export default function TechNav() {
  return (
    <nav className={styles.techNav}>
      <NavLink
        to="/technology/launch-vehicle"
        className={({isActive}) => (isActive ? styles.active : undefined)}
      >
        1
      </NavLink>
      <NavLink
        to="/technology/spaceport"
        className={({isActive}) => (isActive ? styles.active : undefined)}
      >
        2
      </NavLink>
      <NavLink
        to="/technology/space-capsule"
        className={({isActive}) => (isActive ? styles.active : undefined)}
      >
        3
      </NavLink>
    </nav>
  );
}
