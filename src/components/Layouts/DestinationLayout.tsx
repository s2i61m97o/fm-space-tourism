import {Outlet} from "react-router";
import DestinationNav from "../DestinationNav/DestinationNav";
import PageImage from "../PageImage/PageImage";
import data from "../../data.json";

export default function DestinationLayout() {
  const destinationData = data.destinations;
  return (
    <>
      <PageImage />
      <DestinationNav />
      <Outlet context={{destinationData}} />
    </>
  );
}
