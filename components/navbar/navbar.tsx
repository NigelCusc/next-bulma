import { useState } from "react";

import classes from "./navbar.module.scss";
import {
  faFacebook,
  faTwitter,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className={`${classes.hero} hero is-medium`}>
      <div className="hero-head">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
                  width="112"
                  height="28"
                />
              </a>
              <a
                role="button"
                className={`navbar-burger ${menuOpen && "is-active"}`}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(!menuOpen);
                }}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div
              id="navbarBasicExample"
              className={`navbar-menu ${menuOpen && "is-active"}`}
            >
              <div className="navbar-start">
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Blog Posts</a>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <a href="#" className={classes.icon}>
                    <FontAwesomeIcon
                      className={classes.iconSvg}
                      icon={faFacebook}
                    />
                  </a>
                  <a href="#" className={classes.icon}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className={classes.icon}>
                    <FontAwesomeIcon icon={faSpotify} />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
