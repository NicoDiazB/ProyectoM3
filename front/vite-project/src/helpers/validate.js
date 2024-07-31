import { getAllUser } from "./UserAxios";

const validateRegister = async (dataUser) => {
  try {
    let error = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const compareData = await getAllUser();
    if (!dataUser.name) {
      error.name = "El nombre es requerido";
    } else if (!dataUser.email) {
      error.email = "El email es requerido";
    } else if (!emailRegex.test(dataUser.email)) {
      error.email = "El Email no es valido ";
    } else if (compareData.some((user) => user.email === dataUser.email)) {
      error.email = "El email ya existe";
    } else if (!dataUser.birthday) {
      error.birthday = "La fecha de nacimiento es requerida";
    } else if (new Date(dataUser.birthday) > new Date()) {
      error.birthday = "No puedes colocar una fecha posterior";
    } else if (!dataUser.dni) {
      error.dni = "La cedula es requerida";
    } else if (compareData.some((user) => user.dni == dataUser.dni)) {
      error.dni = "La cedula ya existe";
    } else if (dataUser.dni.length > 9) {
      error.dni = "La cedula no puede ser mayor a 9 digitos";
    } else if (!dataUser.username) {
      error.username = "El nombre de usuario es requerido";
    } else if (
      compareData.some((user) => user.credencial.username === dataUser.username)
    ) {
      error.username = "Cambiar el nombre de usuario";
    } else if (!dataUser.password) {
      error.password = "La contraseña es requerida";
    }
    return error;
  } catch (error) {
    console.log(error);
  }
};

const validateLogin = async (dataLogin) => {
  try {
    let error = {};
    if (!dataLogin.username) {
      error.username = "El nombre de usuario es requerido";
    } else if (!dataLogin.password) {
      error.password = "La contraseña es requerida";
    }
    return error;
  } catch (error) {
    console.log(error);
  }
};

const validateAppointment = async (dataAppointment) => {
  try {
    let error = {};
    if (!dataAppointment.date) {
      error.date = "La fecha es requerdia";
    } else if (new Date(dataAppointment.date) < new Date()) {
      error.date = "No puedes colocar una fecha que ya paso";
    } else if (!dataAppointment.time) {
      error.time = "La hora de la cita es requerida";
    } else if (!dataAppointment.description) {
      error.description = "La descripcion es requerida";
    }
    return error;
  } catch (error) {}
};

export { validateRegister, validateLogin, validateAppointment };
