import React, { useContext } from "react";
import { NavContext } from "./Navbar";

export default function StorePage() {
  const { currentPath, setCurrentPathToSitePath } = useContext(NavContext);
  setCurrentPathToSitePath(window.location.pathname)
  return (
    <div>
      
    </div>
  );
}
