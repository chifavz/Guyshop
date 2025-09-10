import React from "react";
import * as styles from "../styles/HomePage.module.css";

const NavigationLinks = ({ links, docLink }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.docLink}>
        <a
          className={styles.link}
          href={docLink.url}
        >
          {docLink.text}
        </a>
      </li>
      {links.map(link => (
        <li key={link.url} className={styles.listItem} style={{ color: link.color }}>
          <span>
            <a
              className={styles.link}
              href={link.url}
            >
              {link.text}
            </a>
            {link.badge && (
              <span className={styles.badge} aria-label="New Badge">
                NEW!
              </span>
            )}
            <p className={styles.description}>{link.description}</p>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default NavigationLinks;