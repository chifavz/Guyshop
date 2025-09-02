import React from "react";
import * as styles from "../styles/HomePage.module.css";

const NavigationLinks = ({ links, docLink }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.docLink}>
        <a
          className={styles.link}
          href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
        >
          {docLink.text}
        </a>
      </li>
      {links.map(link => (
        <li key={link.url} className={styles.listItem} style={{ color: link.color }}>
          <span>
            <a
              className={styles.link}
              href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
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