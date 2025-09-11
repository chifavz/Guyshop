import React from "react";
import Cart from "./Cart";
import * as styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>Guyshop</h1>
          <nav className={styles.nav}>
            <a href="/" className={styles.navLink}>Home</a>
            <a href="/#about" className={styles.navLink}>About</a>
            <a href="/product" className={styles.navLink}>Products</a>
            <Cart />
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2024 Guyshop - Men's Fashion & Accessories</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;