import clsx from "clsx";
import {useBackgroundImage} from "../../hooks/useBackgroundImage";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  useBackgroundImage();
  return (
    <main className={clsx("container", styles.container)}>
      <section className={styles.content}>
        <h1 className={styles.title}>404: page not found</h1>
        <p className={styles.body}>
          the page you are looking for does not exist
        </p>
      </section>
    </main>
  );
}
