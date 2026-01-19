import {useParams, Navigate} from "react-router";
import InnerNav from "../../components/InnerNav/InnerNav";
import clsx from "clsx";
import styles from "./Crew.module.scss";
import data from "../../data.json";
import {useBackgroundImage} from "../../hooks/useBackgroundImage";
import useSwipeNavigation from "../../hooks/useSwipeNavigation";

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
  const crewPaths: string[] = crewData.map((member) =>
    member.role.toLowerCase().replace(" ", "-"),
  );

  useBackgroundImage();
  useSwipeNavigation("crew", currentCrewMember, crewPaths);

  if (!crewMember) return <Navigate to="/404" />;

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
          <InnerNav variant="dot" paths={crewPaths} route="crew" />
        </section>
        <img
          src={`${import.meta.env.BASE_URL}${crewMember.images.webp}`}
          alt={crewMember.images.alt}
          className={styles.memberInfo__img}
        />
      </main>
    </>
  );
}
