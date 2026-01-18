import {useParams, Navigate} from "react-router";
import CrewNav from "./CrewNav";
import clsx from "clsx";
import styles from "./Crew.module.scss";
import data from "../../data.json";
import {useBackgroundImage} from "../../hooks/useBackgroundImage";

type Crew = {
  name: string;
  images: {
    png: string;
    webp: string;
    alt: string;
  };
  role: string;
  bio: string;
};

export default function Crew() {
  const crewData: Crew[] = data.crew;
  const currentCrewMember: string | undefined = useParams().crew;
  const crewMember: Crew | undefined = crewData.find(
    (crew) => crew.role.toLowerCase().replace(" ", "-") === currentCrewMember,
  );

  useBackgroundImage();

  if (crewMember === undefined) {
    return <Navigate to="/404" />;
  }

  return (
    <>
      <h3 className={clsx("route", styles.route)}>
        <span>02</span>meet your crew
      </h3>
      <main className="container">
        <section className={styles.content}>
          <section className={styles.memberInfo}>
            <h2 className={styles.memberInfo__role}>{crewMember.role}</h2>
            <h1 className={styles.memberInfo__name}>{crewMember.name}</h1>
            <p className={styles.memberInfo__bio}>{crewMember.bio}</p>
          </section>
          <CrewNav />
        </section>
        <img
          src={`${import.meta.env.BASE_URL}${crewMember.images.webp}`}
          alt={crewMember.images.alt}
          className={styles.imemberInfo__mg}
        />
      </main>
    </>
  );
}
