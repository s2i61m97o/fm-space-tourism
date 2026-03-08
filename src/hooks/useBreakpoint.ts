"use client";
import {useState, useEffect} from "react";

export default function useBreakpoint(breakpoint: number): boolean {
  const [isAbove, setIsAbove] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);
    function handleChange(e: MediaQueryListEvent) {
      setIsAbove(e.matches);
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isAbove;
}
