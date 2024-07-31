import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>Redes</h2>
      <a href="https://www.linkedin.com/in/nicolas-diaz-99944b232/">
        <img
          src="../../../public/linkedinicon.svg"
          alt=""
          className={styles.img}
        />
      </a>
      <a href="https://github.com/NicoDiazB">
        <img
          src="../../../public/githubicon.svg"
          alt=""
          className={styles.img}
        />
      </a>
    </footer>
  );
};

export default Footer;
