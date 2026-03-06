import Image from "next/image";
import styles from "./TabImage.module.scss";
import clsx from "clsx";

export default function TabImage({
  img,
  activeTab,
  className,
  variant,
}: {
  img: {
    title: string;
    data: {
      src: string | {landscape: string; portrait: string};
      alt: string;
    };
  }[];
  activeTab: number;
  className?: string;
  variant: "Square" | "Portrait" | "Fill";
}) {
  return (
    <div
      className={clsx("carousel", className)}
      style={
        {
          "--carousel-index": activeTab,
        } as React.CSSProperties
      }
    >
      {img.map((img) => {
        return (
          <div
            key={img.title}
            className={clsx(
              styles.img__container,
              styles.img__container + variant,
            )}
          >
            {variant === "Fill" && typeof img.data.src !== "string" ? (
              <>
                <Image
                  src={`/assets/${img.data.src.landscape}`}
                  alt={img.data.alt}
                  fill
                  className={clsx(styles.img, styles.img__landscape)}
                />
                <Image
                  src={`/assets/${img.data.src.portrait}`}
                  alt={img.data.alt}
                  fill
                  className={clsx(styles.img, styles.img__portrait)}
                />
              </>
            ) : (
              <Image
                src={`/assets/${img.data.src}`}
                alt={img.data.alt}
                fill
                className={styles.img}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
