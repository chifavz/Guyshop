import React from "react";
import * as styles from "../styles/HomePage.module.css";

const Layout = ({ children }) => {
  return (
    <main className={styles.page}>
      {children}
    </main>
  );
};

export default Layout;