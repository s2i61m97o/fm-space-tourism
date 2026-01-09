import {Link} from "react-router";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h2 className={styles.subtitle}>so, you want to travel to</h2>
        <h1 className={styles.title}>space</h1>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          got to outer space and not hover kind of on the edge of it. Well sit
          back and relax because we'll give you a truly out of this world
          experience!
        </p>
      </section>
      <div className={styles.explore__container}>
        <Link to="/destination" className={styles.explore}>
          <div className={styles.explore__bkgd}>Explore</div>
        </Link>
      </div>
    </main>
  );
}
