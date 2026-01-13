import {useParams, Navigate} from "react-router";
import {useBackgroundImage} from "../../hooks/background";
import clsx from "clsx";
import data from "../../data.json";
import useScreenSize from "../../hooks/useScreenSize";

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
          src={screenSize < 1023 ? tech.images.landscape : tech.images.portrait}
          alt={tech.images.alt}
        />
        {/* Nav Here */}
        <section className={clsx(screenSize < 1023 ? "container" : undefined)}>
          <h2>the terminology...</h2>
          <h1>{tech.name}</h1>
          <p>{tech.description}</p>
        </section>
      </main>
    </>
  );
}
