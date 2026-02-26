import {backgroundMap} from "@/assets/backgrounds";
import styles from "./Background.module.scss";

type PageName = "home" | "destination" | "crew" | "technology";

export default function Background({page}: {page: PageName}) {
  return (
    <div className={styles.container} aria-hidden>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={backgroundMap[page].desktop.src}
        />
        <source
          media="(min-width: 768px)"
          srcSet={backgroundMap[page].tablet.src}
        />
        <img
          src={backgroundMap[page].mobile.src}
          alt=""
          className={styles.image}
          fetchPriority="high"
        />
      </picture>
    </div>
  );
}
