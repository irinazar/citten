import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar(): JSX.Element {
  const location = useLocation();

  return (
    <div className={styles.navbarContainer}>
      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className={`${styles.navlink} ${
                location.pathname === "/"
                  ? styles.active
                  : styles.navkink
              }`}
              to={"/"}
            >
              Все котики
            </NavLink>
            <NavLink
              className={`${styles.navlink} ${
                location.pathname === "/favorite"
                  ? styles.active
                  : styles.navkink
              }`}
              to={"/favorite"}
            >
              Любимые котики
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
