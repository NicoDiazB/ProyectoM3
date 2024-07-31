import React from "react";
import Cartinfo from "./infohomeSubcomponents/Cartinfo";
import styles from "./Infohome.module.css";
const Infohome = () => {
  return (
    <div className={styles.containerPadre}>
      <div>
        <h1>Agenta tu cita con nosotros!</h1>
        <Cartinfo />
      </div>
    </div>
  );
};

export default Infohome;
