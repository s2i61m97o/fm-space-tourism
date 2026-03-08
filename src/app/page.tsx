import Background from "@/components/layout/Background/Background";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Background page="home" />
      <main className={styles.container}>
        <section className={styles.hero}>
          <h2 className={styles.hero__subtitle}>so, you want to travel to</h2>
          <h1 className={styles.hero__title}>space</h1>
          <p>
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely got to outer space and not hover kind of on the edge of
            it. Well sit back and relax because we&apos;ll give you a truly out
            of this world experience!
          </p>
        </section>
        <div className={styles.explore__container}>
          <Link href="/destination" className={styles.explore__link}>
            <span className={styles.explore__btn}>explore</span>
          </Link>
        </div>
      </main>
    </>
  );
}
