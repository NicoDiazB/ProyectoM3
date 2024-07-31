import React, { useState } from "react";
import Labelform from "../../Registerform/RegisterFormSubcomponents/Labelform";
import styles from "../../Registerform/RegisterFormSubcomponents/FromUser.module.css";
import { validateAppointment } from "../../../helpers/validate";
import { postAppointment } from "../../../helpers/getAppointments";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAppointment } from "../../../redux/sliceAppoint";

const FormAppointment = () => {
  const [appointmentData, setAppointmentData] = useState({
    date: "",
    time: "",
    description: "",
  });
  const [appointError, setAppointError] = useState({
    date: "",
    time: "",
    description: "",
  });

  const onChangeInput = async (e) => {
    const { name, value } = e.target;
    const updateAppointment = { ...appointmentData, [name]: value };
    setAppointmentData(updateAppointment);
    setAppointError(await validateAppointment(updateAppointment));
  };
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.user.userId);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(appointError).length === 0) {
      postAppointment(appointmentData, userLogin)
        .then((res) => {
          alert("turno agendado con exito");
          dispatch(addAppointment(res.newAppointment));
          setAppointmentData({
            date: "",
            time: "",
            description: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Aun tienes errores");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Agenda tu cita</h2>
        <Labelform
          forName="date"
          idName="date"
          type="date"
          value={appointmentData.date}
          name="date"
          labelName="Fecha de la cita"
          onChange={onChangeInput}
        />
        {appointError.date && (
          <span className={styles.span}>{appointError.date}</span>
        )}
        <Labelform
          forName="time"
          idName="time"
          type="time"
          value={appointmentData.time}
          name="time"
          labelName="Hora de la cita"
          onChange={onChangeInput}
        />
        {appointError.time && (
          <span className={styles.span}>{appointError.time}</span>
        )}
        <Labelform
          forName="description"
          idName="description"
          type="text"
          value={appointmentData.description}
          name="description"
          labelName="Tipo de cita medica"
          placeholderInfo="Cita con el ortopedista"
          onChange={onChangeInput}
        />
        {appointError.description && (
          <span className={styles.span}>{appointError.description}</span>
        )}
        <div className={styles.container}>
          <Link className={styles.a} to="/appointments">
            <button className={styles.button}>Ver tus citas</button>
          </Link>
          <button className={styles.button}>Agendar turno</button>
        </div>
      </form>
    </>
  );
};

export default FormAppointment;
