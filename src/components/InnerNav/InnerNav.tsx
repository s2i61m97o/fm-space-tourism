import {NavLink} from "react-router";
import styles from "./InnerNav.module.scss";
import type {JSX} from "react";

type InnerNavProps = {
  variant: "name" | "number" | "dot";
  paths: string[];
  route: string;
};

export default function InnerNav({variant, paths, route}: InnerNavProps) {
  let navStyle: string;
  let activeStyle: string;

  switch (variant) {
    case "name":
      navStyle = styles.nameNav;
      activeStyle = styles.activeName;
      break;
    case "number":
      navStyle = styles.numberNav;
      activeStyle = styles.activeNumber;
      break;
    case "dot":
      navStyle = styles.dotNav;
      activeStyle = styles.activeDot;
  }

  const linkElements: JSX.Element[] = paths.map((path, index) => {
    return (
      <NavLink
        to={`/${route}/${path.toLowerCase().replace(" ", "-")}`}
        relative="route"
        className={({isActive}) => (isActive ? activeStyle : "")}
      >
        {variant === "name"
          ? path.replace("-", " ").toUpperCase()
          : variant === "number"
            ? index + 1
            : undefined}
      </NavLink>
    );
  });

  return <nav className={navStyle}>{linkElements}</nav>;
}
