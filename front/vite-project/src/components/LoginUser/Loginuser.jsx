import React from "react";
import FormLogin from "./LoginSubcomponents/FormLogin";
import styles from "../Registerform/RegisterForm.module.css";
const Loginuser = () => {
  return (
    <div className={styles.container}>
      <FormLogin />
    </div>
  );
};

export default Loginuser;
