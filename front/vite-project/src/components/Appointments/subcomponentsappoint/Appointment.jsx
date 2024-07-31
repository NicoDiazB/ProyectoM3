import { useDispatch } from "react-redux";
import { cancelAppointment } from "../../../helpers/getAppointments";
import { cancelAppoint } from "../../../redux/sliceAppoint";
import styles from "./Appointment.module.css";

const Appointment = ({ id, date, time, description, status }) => {
  const dispatch = useDispatch();
  const handleCancelAppoint = () => {
    if (window.confirm("Estas seguro que quieres cancelar la cita?")) {
      cancelAppointment(id)
        .then((res) => {
          dispatch(cancelAppoint(id));
          alert("se cancelo la Cita");
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
  };
  return (
    <div className={styles.container}>
      <p>
        Turno numero: <span className={styles.span}>{id}</span>
      </p>
      <p>
        Fecha: <span className={styles.span}>{date}.</span>
      </p>
      <p>
        Hora:
        <span className={styles.span}>{time}.</span>
      </p>

      <p className={styles.p}>
        Descripcion:
        <span className={styles.span}>{description}.</span>
      </p>
      <p>
        Estado de la Cita: <span className={styles.span}>{status}.</span>
      </p>
      <button
        id={id}
        type="button"
        onClick={handleCancelAppoint}
        className={styles.button}
        disabled={status === "CANCELED"}
      >
        <svg
          id={id}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
        >
          <g fill="currentColor">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708" />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Appointment;
