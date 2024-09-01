// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}

export default Layout;