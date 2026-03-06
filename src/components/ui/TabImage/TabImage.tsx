import Image from "next/image";
import styles from "./TabImage.module.scss";
import clsx from "clsx";

export default function TabImage({
  img,
  activeTab,
  className,
  variant,
}: {
  img: {title: string; img: {src: string; alt: string}}[];
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
            <Image
              src={`/assets/${img.img.src}`}
              alt={img.img.alt}
              fill
              className={styles.img}
            />
          </div>
        );
      })}
    </div>
  );
}
