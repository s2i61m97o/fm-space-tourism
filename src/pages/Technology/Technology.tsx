import {useParams, Navigate} from "react-router";
import {useBackgroundImage} from "../../hooks/useBackgroundImage";
import clsx from "clsx";
import data from "../../data.json";
import useScreenSize from "../../hooks/useScreenSize";
import styles from "./Technology.module.scss";
import TechNav from "./TechNav";

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
  useBackgroundImage();
  const screenSize = useScreenSize();

  const techData: Tech[] = data.technology;
  const currentTech: string | undefined = useParams().tech;
  const tech: Tech | undefined = techData.find(
    (tech) => tech.name.toLowerCase().replace(" ", "-") === currentTech
  );

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
          styles.container
        )}
      >
        <img
          src={
            screenSize < 1023 && screenSize > 640
              ? tech.images.landscape
              : tech.images.portrait
          }
          alt={tech.images.alt}
          className={styles.img}
        />
        {screenSize < 1024 ? <TechNav /> : undefined}
        <section
          className={clsx(
            screenSize < 1023 ? "container" : undefined,
            styles.content
          )}
        >
          <h2 className={styles.heading}>the terminology...</h2>
          <h1 className={styles.name}>{tech.name}</h1>
          <p className={styles.description}>{tech.description}</p>
        </section>
        {screenSize < 1024 ? undefined : <TechNav />}
      </main>
    </>
  );
}
