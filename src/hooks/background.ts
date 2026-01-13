import {useEffect} from "react";
import {useLocation} from "react-router";

const backgroundClasses: {
  destination: string;
  crew: string;
  technology: string;
} = {
  destination: "destination",
  crew: "crew",
  technology: "technology",
};

function useBackgroundImage() {
  const currentPath: string = useLocation().pathname;
  let backgroundClassname: string = "home";

  if (currentPath === "/") {
    backgroundClassname = "home";
  } else {
    const currentPathParent: string = currentPath.split("/")[1];
    console.log(currentPathParent);
    for (const [path, classname] of Object.entries(backgroundClasses)) {
      if (path === currentPathParent) {
        backgroundClassname = classname;
      }
    }
  }

  useEffect(() => {
    document.body.classList.add(backgroundClassname);
    return () => document.body.classList.remove(backgroundClassname);
  }, [backgroundClassname]);
}

export {useBackgroundImage};
