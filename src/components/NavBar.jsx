import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../img/svg/vector-2.svg";
import search from "../img/svg/vector-1.svg";

export default function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar__links">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <Link className="nav-bar__link selected" to="/">
            Home
          </Link>
          <Link className="nav-bar__link" to="/">
            Hairdress
          </Link>
          <Link className="nav-bar__link" to="/">
            Tattoo
          </Link>
          <Link className="nav-bar__link" to="/about-us">
            About Us
          </Link>
          <img src={search} alt="" />
        </div>
      </nav>
    </>
  );
}
