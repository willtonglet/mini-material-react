import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    function handleLocation() {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener("popstate", handleLocation);

    return () => window.removeEventListener("popstate", handleLocation);
  }, []);

  return currentPath === path && children;
};

export default Route;
