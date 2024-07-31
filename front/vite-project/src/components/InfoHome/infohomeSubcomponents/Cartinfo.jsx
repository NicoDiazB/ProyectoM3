import React from "react";
import styles from "./Cartinfo.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cartinfo = () => {
  // preguntar si esta logeado para que cambie la vista de home y el boton sea de podir cita y no register
  const userLogin = useSelector((state) => state.user.userId);
  return (
    <div className={styles.container}>
      <img
        src="src\assets\imagendochome.jpg"
        alt="Imagen medico"
        className={styles.img}
      />

      {userLogin > 0 ? (
        <div className={styles.containerInfo}>
          <h2>Bienvenido!</h2>
          <p>Pide tu cita!</p>
          <Link className={styles.a} to="/scheduleAppointment">
            <button className={styles.button}>Pide tu cita</button>
          </Link>
        </div>
      ) : (
        <div className={styles.containerInfo}>
          <h2>Puedes agendar tu cita hoy!</h2>
          <p>Registrate y pide tu cita</p>
          <Link className={styles.a} to="/register">
            <button className={styles.button}>Registrate!</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cartinfo;
