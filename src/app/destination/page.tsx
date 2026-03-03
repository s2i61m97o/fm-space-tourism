"use client";
import Background from "@/components/layout/Background/Background";
import styles from "./page.module.scss";
import Image from "next/image";
import type {Destination, DestinationList} from "@/types/destinations";
import data from "@/data/destination.json";
import {Images} from "@/assets/destination";
import {useState, useRef, useEffect} from "react";
import clsx from "clsx";

export default function Destination() {
  const destinationData = data as Destination[];
  const destinationsArr: DestinationList[] = destinationData.map((d) => d.name);

  const [current, setCurrent] = useState<Destination["name"]>(
    destinationsArr[0],
  );

  const isMounted = useRef(false);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleTabChange = (e: React.KeyboardEvent, index: number) => {
    const total = destinationsArr.length;
    let newIndex: number | null = null;

    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        newIndex = (index + 1) % total;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        newIndex = (index - 1 + total) % total;
        break;
      case "Home":
        newIndex = 0;
        break;
      case "End":
        newIndex = total - 1;
        break;
      default:
        return;
    }

    e.preventDefault();
    setCurrent(destinationsArr[newIndex]);
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    const index = destinationsArr.findIndex((d) => d === current);
    tabRefs.current[index]?.focus();
  }, [destinationsArr, current]);

  const imageElements = data.map((destination) => {
    const destinationName = destination.name as Destination["name"];

    return (
      <Image
        key={destination.name}
        src={Images[destinationName].src}
        fill
        sizes="(min-width:1024px) 33vw, 40vw"
        className={clsx(
          styles.img,
          destination.name === current && styles.active,
        )}
        placeholder="blur"
        blurDataURL={Images[destinationName].blurDataURL}
        alt={destination.image_alt}
      />
    );
  });

  const contentElements = data.map((destination) => {
    return (
      <div
        aria-hidden={destination.name !== current ? true : false}
        aria-labelledby={`#${destination.name}Control`}
        className={clsx(
          styles.content,
          destination.name === current && styles.active,
        )}
        id={`${destination.name}Content`}
        key={destination.name}
        role="tabpanel"
        tabIndex={destination.name === current ? 0 : -1}
      >
        <h1 className={styles.content__title}>{destination.name}</h1>
        <p className={styles.content__description}>{destination.description}</p>
        <hr className={styles.content__break} />
        <div className={styles.content__extra}>
          <p>
            avg distance <span>{destination.distance}</span>
          </p>
          <p>
            est. travel time <span>{destination.travel}</span>
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <Background page="destination" />
      <main className={styles.container}>
        <h3 className="current-page">
          <span>01</span> pick your destination
        </h3>
        <div className={styles.img__container}>{imageElements}</div>
        <div className={styles.btn__container} role="tablist">
          {destinationsArr.map((d, index) => {
            return (
              <button
                aria-controls={`#${d}Content`}
                aria-selected={d === current ? true : false}
                className={clsx(
                  styles.button,
                  d === current && styles.buttonActive,
                )}
                id={`${d}Control`}
                key={d}
                onClick={() => setCurrent(d)}
                onKeyDown={(e) => handleTabChange(e, index)}
                role="tab"
                tabIndex={d === current ? 0 : -1}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
              >
                {d}
              </button>
            );
          })}
        </div>
        <div
          className={styles.content__container}
          style={
            {
              "--destination-index": destinationsArr.indexOf(current),
            } as React.CSSProperties
          }
        >
          {contentElements}
        </div>
      </main>
    </>
  );
}
