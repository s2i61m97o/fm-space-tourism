import {useEffect} from "react";
import {useNavigate} from "react-router";
import "swiped-events";

export default function useSwipeNavigation(
  page: string,
  currentCrewMember: string | undefined,
  routeOrder: string[],
) {
  const navigate = useNavigate();

  const handleSwipe = (direction: string) => {
    const currentRouteIndex: number = routeOrder.findIndex(
      (route) => route === currentCrewMember,
    );
    if (direction === "left") {
      const nextRoute: string =
        currentRouteIndex === routeOrder.length - 1
          ? routeOrder[0]
          : routeOrder[currentRouteIndex + 1];
      navigate(`/${page}/${nextRoute}`);
    } else if (direction === "right") {
      const nextRoute: string =
        currentRouteIndex === 0
          ? routeOrder[routeOrder.length - 1]
          : routeOrder[currentRouteIndex - 1];
      navigate(`/${page}/${nextRoute}`);
    }
  };

  useEffect(() => {
    const handleSwipeEvent = (e: CustomEvent<SwipedEventDetail>) =>
      handleSwipe(e.detail.dir);
    window.addEventListener("swiped", handleSwipeEvent);
    return () => window.removeEventListener("swiped", handleSwipeEvent);
  });
}
