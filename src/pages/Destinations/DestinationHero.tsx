import styles from "./DestinationHero.module.scss";

type DestinationHeroProps = {
  imgUrl: {
    png: string | undefined;
    webp: string | undefined;
    alt: string | undefined;
  };
  imgStyles: {
    height: string;
    width: string;
    margin: string;
  };
};

export default function PageImage({imgUrl, imgStyles}: DestinationHeroProps) {
  return (
    <>
      <h3 className={styles.title}>
        <span>01</span> pick your destination
      </h3>
      <img src={imgUrl.png} alt={imgUrl.alt} style={imgStyles} />;
    </>
  );
}
