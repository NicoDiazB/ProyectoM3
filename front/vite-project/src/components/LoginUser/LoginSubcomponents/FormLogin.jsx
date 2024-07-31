import React, { useState } from "react";
import Labelform from "../../Registerform/RegisterFormSubcomponents/Labelform";
import styles from "../../Registerform/RegisterFormSubcomponents/FromUser.module.css";
import { validateLogin } from "../../../helpers/validate";
import { loginUser } from "../../../helpers/UserAxios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../redux/slices";
import { addAppointments } from "../../../redux/sliceAppoint";

const FormLogin = () => {
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });
  const [errorLogin, setErrorLogin] = useState({
    username: "",
    password: "",
  });
  const handlerInputChange = async (e) => {
    const { name, value } = e.target;
    const updateLogin = { ...userLogin, [name]: value };
    setUserLogin(updateLogin);
    setErrorLogin(await validateLogin(updateLogin));
  };

  const navegate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errorLogin).length === 0) {
      loginUser(userLogin)
        .then((res) => {
          alert("Usuario se logueo con exito");
          dispatch(addAppointments(res.appointments));
          dispatch(addUser(res.id));
          navegate("/scheduleAppointment");
        })
        .catch((err) => {
          console.log(err);
          const resError = err.response.data;
          alert(resError.mensaje + " Status Error: " + err.response.status);
        });
    } else {
      alert("Aun tienes errores");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Inicia Sesión</h2>
      {/* forName, idName, type, labelName  */}
      <Labelform
        forName="username"
        idName="username"
        name="username"
        type="text"
        labelName="Nombre de Usuario"
        placeholderInfo="pepito1"
        value={userLogin.username}
        onChange={handlerInputChange}
      />
      {errorLogin.username && (
        <span className={styles.span}>{errorLogin.username}</span>
      )}
      <Labelform
        forName="password"
        idName="password"
        type="password"
        name="password"
        labelName="Contraseña"
        placeholderInfo="********"
        value={userLogin.password}
        onChange={handlerInputChange}
      />
      {errorLogin.password && (
        <span className={styles.span}>{errorLogin.password}</span>
      )}
      <div className={styles.container}>
        <Link className={styles.a} to="/register">
          <button className={styles.button}>Crear una cuenta</button>
        </Link>
        <button className={styles.button}>Iniciar Sesion</button>
      </div>
    </form>
  );
};

export default FormLogin;
