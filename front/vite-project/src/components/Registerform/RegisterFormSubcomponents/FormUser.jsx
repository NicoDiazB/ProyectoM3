import React, { useState } from "react";
import styles from "./FromUser.module.css";
import Labelform from "./Labelform";
import { validateRegister } from "../../../helpers/validate";
import { postUser } from "../../../helpers/UserAxios";
import { useNavigate } from "react-router-dom";
const FormUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    birthday: "",
    dni: "",
    username: "",
    password: "",
  });
  const [errorRegister, setErrorRegister] = useState({
    name: "",
    email: "",
    birthday: "",
    dni: "",
    username: "",
    password: "",
  });
  const handlerInputChange = async (event) => {
    const { name, value } = event.target;
    const updatedata = { ...userData, [name]: value };
    setUserData(updatedata);
    setErrorRegister(await validateRegister(updatedata));
  };

  const navegate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // en vez de manejarlo con function async puedo hacer con then para usar el error del back
    if (Object.keys(errorRegister).length === 0) {
      const responseUser = await postUser(userData);
      if (responseUser) {
        alert("el usuario se registro con exito");
        setUserData({
          name: "",
          email: "",
          birthday: "",
          dni: "",
          username: "",
          password: "",
        });
        //* re direccion al login
        navegate("/login");
      }
    } else {
      alert("revisa hay errores");
    }
  };
  const handleReset = () => {
    setUserData({
      name: "",
      email: "",
      birthday: "",
      dni: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} action="" className={styles.form}>
      <h2>Completa el Registro</h2>
      <Labelform
        forName="name"
        idName="name"
        name="name"
        type="text"
        labelName="Nombre"
        placeholderInfo="Pepito"
        value={userData.name}
        onChange={handlerInputChange}
      />
      {errorRegister.name && (
        <span className={styles.span}>{errorRegister.name}</span>
      )}
      <Labelform
        forName="email"
        idName="email"
        name="email"
        type="email"
        labelName="Correo"
        placeholderInfo="pepito@mail.com"
        value={userData.email}
        onChange={handlerInputChange}
      />
      {errorRegister.email && (
        <span className={styles.span}>{errorRegister.email}</span>
      )}
      <Labelform
        forName="birthday"
        idName="birthday"
        name="birthday"
        type="date"
        labelName="Nacimiento"
        value={userData.birthday}
        onChange={handlerInputChange}
      />
      {errorRegister.birthday && (
        <span className={styles.span}>{errorRegister.birthday}</span>
      )}
      <Labelform
        forName="dni"
        idName="dni"
        name="dni"
        type="number"
        labelName="Cedula"
        placeholderInfo="3211234"
        value={userData.dni}
        onChange={handlerInputChange}
      />
      {errorRegister.dni && (
        <span className={styles.span}>{errorRegister.dni}</span>
      )}
      <Labelform
        forName="username"
        idName="username"
        name="username"
        type="text"
        labelName="Nombre de usuario"
        placeholderInfo="Pepito21"
        value={userData.username}
        onChange={handlerInputChange}
      />
      {errorRegister.username && (
        <span className={styles.span}>{errorRegister.username}</span>
      )}
      <Labelform
        forName="password"
        idName="password"
        name="password"
        type="password"
        labelName="Contraseña"
        placeholderInfo="********"
        value={userData.password}
        onChange={handlerInputChange}
      />
      {errorRegister.password && (
        <span className={styles.span}>{errorRegister.password}</span>
      )}
      <div className={styles.container}>
        <button type="reset" onClick={handleReset} className={styles.button}>
          Borrar formulario
        </button>
        <button className={styles.button}>Registrarse</button>
      </div>
    </form>
  );
};

export default FormUser;
