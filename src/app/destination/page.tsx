import Background from "@/components/layout/Background/Background";
import styles from "./page.module.scss";
import type {Destination, DestinationList} from "@/types/destinations";
import data from "@/data/destination.json";
import clsx from "clsx";
import TabNav from "@/components/ui/TabNav/TabNav";
import {TabPanel} from "@/components/ui/TabPanel/TabPanel";
import TabImage from "@/components/ui/TabImage/TabImage";

export default async function Destination({
  searchParams,
}: {
  searchParams: Promise<{tab?: DestinationList}>;
}) {
  const destinationData = data as Destination[];
  const destinationsArr: DestinationList[] = destinationData.map((d) => d.name);
  const {tab = destinationsArr[0]} = await searchParams;
  const currentTab = destinationsArr.indexOf(tab);

  const normalisedData = destinationData.map((d) => {
    return {
      heading: d.name,
      body: d.description,
      dataFacts: Object.entries(d.data).map(([key, value]) => {
        return {title: key, value: value};
      }),
    };
  });

  const imageData = destinationData.map((d) => {
    return {
      title: d.name,
      img: d.img,
    };
  });

  return (
    <>
      <Background page="destination" />
      <main className={clsx("page-container", styles.container)}>
        <TabImage
          img={imageData}
          activeTab={currentTab}
          className={styles.carousel__img}
        />
        <TabNav
          tabs={destinationsArr}
          activeTab={tab}
          className={styles.carousel__controls}
        />
        <TabPanel
          activeTab={currentTab}
          data={normalisedData}
          className={styles.carousel__panel}
        />
      </main>
    </>
  );
}
