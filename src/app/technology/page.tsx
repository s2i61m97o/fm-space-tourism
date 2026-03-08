import Background from "@/components/layout/Background/Background";
import TabImage from "@/components/ui/TabImage/TabImage";
import TabNav from "@/components/ui/TabNav/TabNav";
import TabPanel from "@/components/ui/TabPanel/TabPanel";
import data from "@/data/technology.json";
import type {Technology} from "@/types";
import styles from "./page.module.scss";
import clsx from "clsx";

export default async function Technology({
  searchParams,
}: {
  searchParams: Promise<{tab?: Technology["name"]}>;
}) {
  const techData = data as Technology[];
  const techArr = data.map((t) => t.name);
  const {tab = techArr[0]} = await searchParams;
  const currentTab = techArr.indexOf(tab);

  const normalisedData = techData.map((t) => {
    return {
      heading: t.name,
      subheading: "the terminology...",
      body: t.description,
    };
  });

  const imageData = techData.map((t) => {
    return {
      title: t.name,
      data: t.image,
    };
  });

  return (
    <>
      <Background page="technology" />
      <section className={clsx("page-container", styles.container)}>
        <h3 className="current-page">
          <span>03</span>space launch 101
        </h3>
        <TabImage
          img={imageData}
          activeTab={currentTab}
          variant="Fill"
          className={styles.tabImg}
        />
        <TabNav
          tabs={techArr}
          activeTab={tab}
          variant="number"
          className={styles.tabNav}
        />
        <TabPanel
          data={normalisedData}
          activeTab={currentTab}
          className={styles.tabPanel}
        />
      </section>
    </>
  );
}
