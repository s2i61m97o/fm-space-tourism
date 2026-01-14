import {Link} from "react-router";
import styles from "./ExploreBtn.module.scss";

export default function ExploreBtn() {
  return (
    <Link to="/destination" className={styles.explore}>
      <div className={styles.explore__bkgd}>Explore</div>
    </Link>
  );
}
