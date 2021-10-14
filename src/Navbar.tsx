import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import "./CSS/Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

type NavContextState = {
  currentPath: string;
  setCurrentPathToSitePath: (path: string) => void;
};

const navDefaultValues: NavContextState = {
  currentPath: "",
  setCurrentPathToSitePath: () => {},
};
export const NavContext = createContext<NavContextState>(navDefaultValues);

export function Navbar() {
  const { currentPath, setCurrentPathToSitePath } = useContext(NavContext);
  const [currentSite, setcurrentSite] = useState("")
  useEffect(() => {
    setcurrentSite(currentPath);
    console.log(currentPath);
  }, );
  const calcCurrentSite = (path: string) => {
    return currentSite === path
      ? {
          textDecoration: "underline",
          textDecorationColor: "#7c606b",
          textDecorationThickness: "3px",
        }
      : {};
  };

  return (
    <nav id="navigation" className="navbar">
      <Link style={calcCurrentSite("/")} className="navigation-element" to="/">
        <p className="navigation-element">Home</p>
      </Link>
      <Link
        style={calcCurrentSite("/store")}
        className="navigation-element"
        to="/store"
      >
        <p className="navigation-element">Store</p>
      </Link>
    </nav>
  );
}

const NavProvider: FC = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(
    navDefaultValues.currentPath
  );
  const setCurrentPathToSitePath = (sitePath: string) =>
    setCurrentPath(sitePath);

  return (
    <NavContext.Provider value={{ currentPath, setCurrentPathToSitePath }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
