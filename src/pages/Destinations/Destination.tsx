import {Navigate, useParams} from "react-router";
import clsx from "clsx";
import styles from "./Destination.module.scss";
import DestinationNav from "./DestinationNav";
import data from "../../data.json";

type Destination = {
  name: string;
  images: {
    png: string;
    webp: string;
    alt: string;
  };
  description: string;
  distance: string;
  travel: string;
};

export default function Destination() {
  const destinationData: Destination[] = data.destinations;
  const currentDestination = useParams().planet;

  const currentDestinationData: Destination | undefined = destinationData.find(
    (destination) => destination.name.toLowerCase() === currentDestination
  );

  if (currentDestinationData === undefined) {
    return <Navigate to="/404" />;
  }

  return (
    <>
      <main className={clsx("container")}>
        <section className={styles.hero}>
          <h3 className="route">
            <span>01</span> pick your destination
          </h3>
          <img
            src={currentDestinationData.images.webp}
            alt={currentDestinationData.images.alt}
            className={styles.heroImg}
          />
        </section>
        <section className={styles.contentContainer}>
          <DestinationNav />
          <h1 className={styles.title}>{currentDestinationData.name}</h1>
          <p className={styles.description}>
            {currentDestinationData.description}
          </p>
          <hr />
          <div className={styles.flexContainer}>
            <div className={styles.infoContainer}>
              <p>avg. distance</p>
              <h2>{currentDestinationData.distance}</h2>
            </div>
            <div className={styles.infoContainer}>
              <p>est. travel time</p>
              <h2>{currentDestinationData.travel}</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
