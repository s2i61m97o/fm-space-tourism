import {Outlet, useParams, Navigate} from "react-router";
import DestinationNav from "../../pages/Destinations/DestinationNav";
import PageHero from "../../pages/Destinations/DestinationHero";
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

export default function DestinationLayout() {
  const destinationData: Destination[] = data.destinations;
  const currentDestination = useParams().planet;

  const currentDestinationData: Destination | undefined = destinationData.find(
    (destination) => destination.name.toLowerCase() === currentDestination
  );

  if (!currentDestination) {
    return <Outlet />;
  }

  if (currentDestinationData === undefined) {
    return <Navigate to="/404" />;
  }

  return (
    <main>
      <PageHero imgUrl={currentDestinationData?.images} />
      <DestinationNav />
      <Outlet context={currentDestinationData} />
    </main>
  );
}
