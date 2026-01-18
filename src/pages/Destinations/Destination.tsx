import {Navigate, useParams} from "react-router";
import styles from "./Destination.module.scss";
import DestinationNav from "./DestinationNav";
import data from "../../data.json";
import {useBackgroundImage} from "../../hooks/useBackgroundImage";

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
    (destination) => destination.name.toLowerCase() === currentDestination,
  );

  useBackgroundImage();

  if (currentDestinationData === undefined) {
    return <Navigate to="/404" />;
  }

  return (
    <>
      <h3 className="route">
        <span>01</span> pick your destination
      </h3>
      <main className="container">
        <section className={styles.hero}>
          <img
            src={`${import.meta.env.BASE_URL}${currentDestinationData.images.webp}`}
            alt={currentDestinationData.images.alt}
            className={styles.hero__image}
          />
        </section>
        <section className={styles.contentContainer}>
          <DestinationNav />
          <h1 className={styles.contentContainer__title}>
            {currentDestinationData.name}
          </h1>
          <p className={styles.contentContainer__description}>
            {currentDestinationData.description}
          </p>
          <hr />
          <div className={styles.contentContainer__flexContainer}>
            <div className={styles.contentContainer__infoContainer}>
              <p>avg. distance</p>
              <h2>{currentDestinationData.distance}</h2>
            </div>
            <div className={styles.contentContainer__infoContainer}>
              <p>est. travel time</p>
              <h2>{currentDestinationData.travel}</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
