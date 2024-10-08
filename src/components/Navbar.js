// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
          <img src={Logo} alt="Logo" className={styles.sitelogo} />
          StudyList
        </Link>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link to="/courses" className={styles.navLinks}>
              Course List
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/dashboard" className={styles.navLinks}>
              Student Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;