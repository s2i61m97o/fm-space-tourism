import styles from "./Home.module.scss";
import {useBackgroundImage} from "../../hooks/useBackgroundImage";
import ExploreBtn from "../../components/ExploreBtn/ExploreBtn";

export default function Home() {
  useBackgroundImage();
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
        <ExploreBtn />
      </div>
    </main>
  );
}
