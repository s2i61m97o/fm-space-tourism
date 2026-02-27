"use client";
import {useState, useEffect} from "react";

export default function useBreakpoint(breakpoint: {
  breakpoint: number;
}): boolean {
  const [isAbove, setIsAbove] = useState<boolean>(() => {
    if (typeof window === undefined) {
      return false;
    }
    return window.matchMedia(`min-width: ${breakpoint}px`).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(`min-width: ${breakpoint}px`);
    function handleChange(e: MediaQueryListEvent) {
      setIsAbove(e.matches);
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isAbove;
}