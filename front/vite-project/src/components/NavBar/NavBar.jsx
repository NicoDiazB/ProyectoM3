import ButtonLoginNavbar from "./subcomponentsNavbar/ButtonLoginNavbar";
import ListAncorNavbar from "./subcomponentsNavbar/ListAncorsNavbar";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/slices";
import { logoutAppoint } from "../../redux/sliceAppoint";
const NavBar = () => {
  const userLogin = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutAppoint());
    dispatch(userLogout());
    navegate("/");
  };
  return (
    <nav className={styles.navBar}>
      <Link to="/">
        <img
          className={styles.img}
          src="../../../public/logo1.svg"
          alt="logo"
        />
      </Link>
      {userLogin > 0 ? (
        <ul className={styles.ul}>
          <ListAncorNavbar route={"/"} ancorName={"Home"} />
          <ListAncorNavbar route={"/service"} ancorName={"Servicios"} />
          <ListAncorNavbar route={"/aboutUs"} ancorName={"Sobre nosotros"} />
          <ListAncorNavbar route={"/appointments"} ancorName={"Tus turnos"} />
          <ListAncorNavbar
            route={"/scheduleAppointment"}
            ancorName={"Agenda tu turno"}
          />
          <ButtonLoginNavbar
            handle={handleLogout}
            route={"/"}
            info={"Logout"}
          />
        </ul>
      ) : (
        <ul className={styles.ul}>
          <ListAncorNavbar route={"/"} ancorName={"Home"} />
          <ListAncorNavbar route={"/service"} ancorName={"Servicios"} />
          <ListAncorNavbar route={"/aboutUs"} ancorName={"Sobre nosotros"} />
          <ButtonLoginNavbar route={"/login"} info={"Login"} />
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
