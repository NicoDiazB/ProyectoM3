import React from "react";
import FormUser from "./RegisterFormSubcomponents/FormUser";
import styles from "./RegisterForm.module.css";
const RegisterForm = () => {
  return (
    <div className={styles.container}>
      <FormUser />
    </div>
  );
};

export default RegisterForm;
