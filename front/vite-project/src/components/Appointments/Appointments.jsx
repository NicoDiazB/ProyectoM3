import Appointment from "./subcomponentsappoint/Appointment";
import styles from "./Appointments.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Appointments = () => {
  const appointments = useSelector((state) => state.appoint.appointments);

  return (
    <div className={styles.containerPadre}>
      <h1>Tus Citas</h1>
      <div className={styles.container}>
        {appointments.length > 0 ? (
          appointments.map((appointment) => {
            return <Appointment key={appointment.id} {...appointment} />;
          })
        ) : (
          <>
            <h2>No hay Citas</h2>
            <Link className={styles.a} to="/scheduleAppointment">
              <button className={styles.button}>Agenta tu cita</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
export default Appointments;
