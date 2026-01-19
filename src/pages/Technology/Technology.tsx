import {useParams, Navigate} from "react-router";
import {useBackgroundImage} from "../../hooks/useBackgroundImage";
import clsx from "clsx";
import data from "../../data.json";
import useScreenSize from "../../hooks/useScreenSize";
import styles from "./Technology.module.scss";
import TechNav from "./TechNav";
import useSwipeNavigation from "../../hooks/useSwipeNavigation";

type Tech = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
    alt: string;
  };
  description: string;
};

export default function Technology() {
  const screenSize = useScreenSize();

  const techData: Tech[] = data.technology;
  const currentTech: string | undefined = useParams().tech;
  const tech: Tech | undefined = techData.find(
    (tech) => tech.name.toLowerCase().replace(" ", "-") === currentTech,
  );
  const techPaths: string[] = techData.map((tech) =>
    tech.name.toLowerCase().replace(" ", "-"),
  );

  useBackgroundImage();
  useSwipeNavigation("technology", currentTech, techPaths);

  if (tech === undefined) {
    return <Navigate to="/404" />;
  }

  return (
    <>
      <h3 className="route">
        <span>03</span> Technology
      </h3>
      <main
        className={clsx(
          screenSize > 1023 ? "container" : undefined,
          styles.container,
        )}
      >
        <img
          src={
            screenSize < 1023 && screenSize > 640
              ? `${import.meta.env.BASE_URL}${tech.images.landscape}`
              : `${import.meta.env.BASE_URL}${tech.images.portrait}`
          }
          alt={tech.images.alt}
          className={styles.content__img}
        />
        {screenSize < 1024 ? <TechNav /> : undefined}
        <section
          className={clsx(
            screenSize < 1023 ? "container" : undefined,
            styles.content,
          )}
        >
          <h2 className={styles.content__heading}>the terminology...</h2>
          <h1 className={styles.content__name}>{tech.name}</h1>
          <p className={styles.content__description}>{tech.description}</p>
        </section>
        {screenSize < 1024 ? undefined : <TechNav />}
      </main>
    </>
  );
}
