"use client";

import {useContext} from "react";
import {MenuContext} from "../NavigationContext/NavigationContext";

export default function MainWrapper({children}: {children: React.ReactNode}) {
  const {open} = useContext(MenuContext);

  return <main inert={open}>{children}</main>;
}
