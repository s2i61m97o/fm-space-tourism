import clsx from "clsx";
import styles from "./page.module.scss";
import Background from "@/components/layout/Background/Background";
import data from "@/data/crew.json";
import {TabPanel} from "@/components/ui/TabPanel/TabPanel";
import TabNav from "@/components/ui/TabNav/TabNav";
import TabImage from "@/components/ui/TabImage/TabImage";
import type {Crew} from "@/types/crew";

export default async function Crew({
  searchParams,
}: {
  searchParams: Promise<{tab?: Crew["name"]}>;
}) {
  const crewData = data as Crew[];
  const crewArr = crewData.map((c) => c.name);
  const {tab = crewArr[0]} = await searchParams;
  const currentTab = crewArr.indexOf(tab);

  const normalisedData = crewData.map((c) => {
    return {
      heading: c.name,
      subheading: c.role,
      body: c.bio,
    };
  });

  const imageData = crewData.map((c) => {
    return {
      title: c.name,
      img: c.img,
    };
  });
  return (
    <>
      <Background page="crew" />
      <main className={clsx("page-container", styles.container)}>
        <h3 className="current-page">
          <span>02</span>meet your crew
        </h3>
        <TabPanel activeTab={currentTab} data={normalisedData} />
        <TabNav activeTab={tab} tabs={crewArr} variant="dot" />
        <TabImage activeTab={currentTab} img={imageData} variant="Portrait" />
      </main>
    </>
  );
}
