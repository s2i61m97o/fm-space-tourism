import {useEffect} from "react";
import {useLocation} from "react-router";

const backgroundClasses = {
  destination: "destination",
  crew: "crew",
  technology: "technology",
};

function useBackgroundImage() {
  const currentPath = useLocation().pathname;
  let backgroundClassname: string = "home";

  if (currentPath === "/") {
    backgroundClassname = "home";
  } else {
    const currentPathParent = currentPath.split("/")[1];
    console.log(currentPathParent);
    for (const [path, classname] of Object.entries(backgroundClasses)) {
      if (path === currentPathParent) {
        backgroundClassname = classname;
      }
    }
  }
  console.log(backgroundClassname);

  useEffect(() => {
    document.body.classList.add(backgroundClassname);
    return () => document.body.classList.remove(backgroundClassname);
  }, [backgroundClassname]);
}

export {useBackgroundImage};
