import React from 'react';
import { Link } from 'react-router-dom';
import logo from './442logo.png';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-sm navbar-light ${styles.navbar}`}>
      <div className={`container-fluid ${styles.container}`}>
        <div className={styles.logoContainer}>
          <img
            alt={"Navbar Brand"}
            src={logo}
            height={20}
            width={20}
            className={styles.logo}
          />
          <Link to={"/"} className={`navbar-brand ${styles.brand}`}>
            FirewiseEW
          </Link>
        </div>

        <ul className={`navbar-nav ${styles.navbarNav}`}>
          <li className={`nav-item ${styles.navItem}`}>
            <Link className={`nav-link ${styles.navLink}`} to={"/"}>
              Home
            </Link>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <Link className={`nav-link ${styles.navLink}`} to={"/aboutus"}>
              About Us
            </Link>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <Link className={`nav-link ${styles.navLink}`} to={"/impact"}>
              Impact
            </Link>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <Link className={`nav-link ${styles.navLink}`} to={"/resources"}>
              Resources
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
