import styles from "./ButtonLoginNavbar.module.css";
import { Link } from "react-router-dom";
const ButtonLoginNavbar = ({ handle, route, info }) => {
  return (
    //* cambie el boton que sea de agendar turno o ver turnos
    <div className={styles.container}>
      <Link className={styles.a} to={route}>
        <button onClick={handle} className={styles.button}>
          <img src="../../../../public/profilelogo.svg" alt="Profile" />
          {info}
        </button>
      </Link>
    </div>
  );
};
export default ButtonLoginNavbar;
