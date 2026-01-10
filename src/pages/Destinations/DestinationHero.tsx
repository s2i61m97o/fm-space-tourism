import styles from "./DestinationHero.module.scss";

type DestinationHeroProps = {
  imgUrl: {
    png: string | undefined;
    webp: string | undefined;
    alt: string | undefined;
  };
};

export default function PageImage({imgUrl}: DestinationHeroProps) {
  return (
    <>
      <h3 className={styles.title}>
        <span>01</span> pick your destination
      </h3>
      <img src={imgUrl.png} alt={imgUrl.alt} className={styles.heroImg} />;
    </>
  );
}
