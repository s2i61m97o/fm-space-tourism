// import {useState} from "react";
import {Navigate, useOutletContext, useParams} from "react-router";

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
  console.log(currentDestination);

  const currentDestinationData = destinationData.find(
    (destination) => destination.name.toLowerCase() === currentDestination
  );

  if (currentDestinationData === undefined) {
    return <Navigate to="/404" />;
  }

  return (
    <main>
      <h1>{currentDestinationData.name}</h1>
      <p>{currentDestinationData.description}</p>
      <hr />
      <div>
        <p>avg. distance</p>
        <h2>{currentDestinationData.distance}</h2>
      </div>
      <div>
        <p>est. travel time</p>
        <h2>{currentDestinationData.travel}</h2>
      </div>
    </main>
  );
}
