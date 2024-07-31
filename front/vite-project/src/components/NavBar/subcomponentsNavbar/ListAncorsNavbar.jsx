import styles from "./ListAncorsNavbar.module.css";
import { Link } from "react-router-dom";
const ListAncorNavbar = ({ ancorName, route }) => {
  return (
    <>
      <li className={styles.li}>
        <Link className={styles.a} to={route}>
          {ancorName}
        </Link>
      </li>
    </>
  );
};

export default ListAncorNavbar;
