import {Navigate, useOutletContext, useParams} from "react-router";
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

type DestinationContextType = {
  destinationData: Destination[];
};

export default function Destination() {
  const {destinationData} = useOutletContext<DestinationContextType>();
  const currentDestination = useParams().planet;

  const currentDestinationData = destinationData.find(
    (destination) => destination.name.toLowerCase() === currentDestination
  );

  if (currentDestinationData === undefined) {
    return <Navigate to="/404" />;
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{currentDestinationData.name}</h1>
      <p className={styles.description}>{currentDestinationData.description}</p>
      <hr />
      <div className={styles.infoContainer}>
        <p>avg. distance</p>
        <h2>{currentDestinationData.distance}</h2>
      </div>
      <div className={styles.infoContainer}>
        <p>est. travel time</p>
        <h2>{currentDestinationData.travel}</h2>
      </div>
    </main>
  );
}
