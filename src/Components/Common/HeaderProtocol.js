import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo@2x.png";
import ThemeToggler from "./ThemeToggler";
import { FaAngleDown } from "react-icons/fa";
import ThemeTogglerSM from "./ThemeTogglerSM";

const HeaderProtocol = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="inner-header">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light">
          <Link className="navbar-brand" to="/">
            <img className="dark-mode-logo" src={logo} alt="Logo" />
          </Link>

          <ThemeTogglerSM />
          <button
            className={`navbar-toggler ${isMenuOpen ? "collapsed" : ""}`}
            type="button"
            aria-expanded={`${isMenuOpen ? true : false}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a href="#" className="btn-main publish-btn">
            Launch App
          </a>
          <div
            className={`collapse navbar-collapse  ${isMenuOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav right-navbar-nav">
              <li className="nav-item dropdown">
                <button
                  className="nav-link publish-btn indopbtn"
                  type="button"
                  id="dropdownMenuButton1"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span>
                    {" "}
                    Connect Wallet{" "}
                    <i>
                      {" "}
                      <FaAngleDown />{" "}
                    </i>
                  </span>
                </button>
                <ul
                  className={`dropdown-menu ${isMenuOpen ? "show" : ""}`}
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <ThemeToggler />
              </li>
            </ul>
          </div>
        </nav>
        <a className="hideclick d-none" data-scroll-goto />
      </div>
    </header>
  );
};
export default HeaderProtocol;
