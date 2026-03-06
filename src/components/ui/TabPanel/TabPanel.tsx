import {NormalisedData} from "@/types";
import styles from "./TabPanel.module.scss";
import clsx from "clsx";

interface TabPanelProps {
  activeTab: number;
  data: NormalisedData;
  className?: string;
}

export default function TabPanel({activeTab, data, className}: TabPanelProps) {
  return (
    <div
      className={clsx("carousel", className)}
      style={
        {
          "--carousel-index": activeTab,
        } as React.CSSProperties
      }
    >
      {data.map((entry, index) => {
        return (
          <div
            key={entry.heading}
            className={styles.panel}
            aria-labelledby={`${entry.heading}-control`}
            aria-hidden={index !== activeTab}
            id={entry.heading}
            role="tabpanel"
            tabIndex={index === activeTab ? 0 : -1}
          >
            {entry.subheading && (
              <span className={styles.panel__subheading}>
                {entry.subheading}
              </span>
            )}
            <h1
              className={clsx(
                entry.subheading
                  ? styles.panel__headingSmall
                  : styles.panel__heading,
              )}
            >
              {entry.heading.replaceAll("-", " ")}
            </h1>
            <p className={styles.panel__body}>{entry.body}</p>
            {entry.dataFacts && <hr className={styles.contentBreak} />}
            {entry.dataFacts && (
              <div className={styles.dataFacts__container}>
                {entry.dataFacts.map((d) => {
                  return (
                    <div key={d.title} className={styles.dataFact}>
                      <span className={styles.dataFact__title}>
                        {d.title.replaceAll("_", " ")}
                      </span>
                      <span className={styles.dataFact__value}>{d.value}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
