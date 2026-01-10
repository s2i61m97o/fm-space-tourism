import {useParams, Navigate} from "react-router";
import clsx from "clsx";
import styles from "./Crew.module.scss";
import data from "../../data.json";

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
    (crew) => crew.role.toLowerCase().replace(" ", "-") === currentCrewMember
  );

  if (crewMember === undefined) {
    return <Navigate to="/404" />;
  }

  return (
    <main className={clsx("container")}>
      <section>
        <h3 className="route">
          <span>02</span>meet your crew
        </h3>
        <h2>{crewMember.role}</h2>
        <h1>{crewMember.name}</h1>
        <p>{crewMember.bio}</p>
        {/* {nav here} */}
      </section>
      <img src={crewMember.images.webp} alt={crewMember.images.alt} />
    </main>
  );
}
