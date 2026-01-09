import {useOutletContext} from "react-router";
import styles from "./Destination.module.scss";

type Destination = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};

export default function Destination() {
  const destinationData = useOutletContext<Destination>();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{destinationData.name}</h1>
      <p className={styles.description}>{destinationData.description}</p>
      <hr />
      <div className={styles.infoContainer}>
        <p>avg. distance</p>
        <h2>{destinationData.distance}</h2>
      </div>
      <div className={styles.infoContainer}>
        <p>est. travel time</p>
        <h2>{destinationData.travel}</h2>
      </div>
    </main>
  );
}
