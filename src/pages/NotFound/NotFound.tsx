import clsx from "clsx";
import {useBackgroundImage} from "../../hooks/useBackgroundImage";
import styles from "./NotFound.module.scss";
import ExploreBtn from "../../components/ExploreBtn/ExploreBtn";

export default function NotFound() {
  useBackgroundImage();
  return (
    <main className={clsx("container", styles.container)}>
      <section className={styles.content}>
        <h1 className={styles.title}>404: page not found</h1>
        <p className={styles.body}>
          the page you are looking for does not exist
        </p>
        <div className={styles.explore__container}>
          <ExploreBtn />
        </div>
      </section>
    </main>
  );
}
