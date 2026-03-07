import {useEffect} from "react";
import type {SwipedEventDetail} from "swiped-events";

export default function useSwipeNavigation(
  tabs: string[],
  activeTab: number,
  handleTabChange: (newActive: string) => void,
) {
  const total = tabs.length;
  const handleSwipe = (direction: string) => {
    let newIndexTitle;
    if (direction === "left") {
      newIndexTitle = tabs.at((activeTab + 1 + total) % total);
    }
    if (direction === "right") {
      newIndexTitle = tabs.at((activeTab - 1 + total) % total);
    }
    if (newIndexTitle === undefined) {
      newIndexTitle = tabs[0];
    }

    handleTabChange(newIndexTitle);
  };

  useEffect(() => {
    const handleSwipeEvent = (e: Event) => {
      const customEvent = e as CustomEvent<SwipedEventDetail>;
      handleSwipe(customEvent.detail.dir);
    };

    import("swiped-events").then(() => {
      window.addEventListener("swiped", handleSwipeEvent);
    });

    return () => window.removeEventListener("swiped", handleSwipeEvent);
  });
}
