"use client";
import {createContext, JSX, useState} from "react";

export const MenuContext = createContext<{
  open: boolean;
  toggleOpen: () => void;
}>({
  open: false,
  toggleOpen: () => {},
});

export default function NavigationContext({
  children,
}: {
  children: JSX.Element[];
}) {
  const [open, setOpen] = useState<boolean>(false);
  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    <MenuContext.Provider value={{open, toggleOpen}}>
      {children}
    </MenuContext.Provider>
  );
}
