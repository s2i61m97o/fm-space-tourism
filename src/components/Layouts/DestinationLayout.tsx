import {Outlet, useParams, Navigate} from "react-router";
import DestinationNav from "../DestinationNav/DestinationNav";
import PageImage from "../PageImage/PageImage";
import data from "../../data.json";

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

export default function DestinationLayout() {
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
      <PageImage imgUrl={currentDestinationData?.images.png} />
      <DestinationNav />
      <Outlet context={currentDestinationData} />
    </>
  );
}
