import { NavLink, useLocation } from "react-router-dom";
import logo from "../../img/svg/vector-2.svg";
import search from "../../img/svg/vector-1.svg";
import styles from "./navbarStyles.module.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.links}>
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <NavLink
            className={`${styles.link} ${
              location.pathname === "/" ? styles.selected : ""
            }`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={`${styles.link} ${
              location.pathname === "/about-us" ? styles.selected : ""
            }`}
            activeClassName={styles.selected}
            to="/about-us"
          >
            About Us
          </NavLink>
          <img src={search} alt="" />
        </div>
      </nav>
    </>
  );
}
