"use client";
import clsx from "clsx";
import styles from "./page.module.scss";
import Background from "@/components/layout/Background/Background";
import {data} from "@/data/crew";
import {crewImages} from "@/assets/crew";
import {useState, useRef, useEffect} from "react";
import {handleTabChange} from "@/utilities/handleTabChange";
import Image from "next/image";
import type {CrewMembers, Replace} from "@/types/crew";

export default function Crew() {
  const [member, setMember] = useState<CrewMembers>(data[0].name);

  const crewArr = data.map((c) => c.name);

  const isMounted = useRef(false);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    const index = data.findIndex((c) => c.name === member);
    tabRefs.current[index]?.focus();
  }, [member]);

  const crewEle = data.map((c) => {
    return (
      <div
        aria-labelledby={`${c.name}-control`}
        aria-hidden={c.name.toLowerCase().split(" ").at(-1) !== member}
        className={clsx(styles.crew__card)}
        id={c.name}
        key={c.name}
        role="tabpanel"
        tabIndex={c.name === member ? 0 : -1}
      >
        <div className={styles.card__info}>
          <h2 className={styles.card__role}>{c.role}</h2>
          <h1 className={styles.card__name}>{c.name.replaceAll("-", " ")}</h1>
        </div>
        <p className={styles.card__bio}>{c.bio}</p>
      </div>
    );
  });

  return (
    <>
      <Background page="crew" />
      <main className={clsx("page-container", styles.container)}>
        <h3 className="current-page">
          <span>02</span>meet your crew
        </h3>
        <div
          className={clsx("carousel", styles.crew__container)}
          style={
            {
              "--carousel-index": crewArr.indexOf(member),
            } as React.CSSProperties
          }
        >
          {crewEle}
        </div>
        <div className={styles.btn__container} role="tablist">
          {crewArr.map((c, index) => {
            return (
              <button
                aria-controls={c}
                aria-label={c}
                className={clsx(styles.btn, c === member && styles.btn__Active)}
                id={`${c}-control`}
                key={c}
                onClick={() => setMember(c)}
                onKeyDown={(e) => handleTabChange(e, setMember, index, crewArr)}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                tabIndex={c !== member ? -1 : 0}
              ></button>
            );
          })}
        </div>
        <div
          className={clsx("carousel", styles.img__container)}
          style={
            {
              "--carousel-index": crewArr.indexOf(member),
            } as React.CSSProperties
          }
        >
          {data.map((c, index) => {
            const crew = c.name.replace("-", "_") as Replace<CrewMembers>;
            return (
              <div key={crew} className={styles.mask__container}>
                <Image
                  height={crewImages[crew].height}
                  width={crewImages[crew].width}
                  src={crewImages[crew].src}
                  alt={c.img_alt}
                  className={clsx(styles.img)}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className={styles.img__mask}></div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
