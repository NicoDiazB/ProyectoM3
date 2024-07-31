import React from "react";
import FormAppointment from "./ScheduleSubcomponents/FormAppointment";
import styles from "../Registerform/RegisterForm.module.css";
const Scheduleappointment = () => {
  return (
    <div className={styles.container}>
      <FormAppointment />
    </div>
  );
};

export default Scheduleappointment;
