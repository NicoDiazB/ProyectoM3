import axios from "axios";

const getAllAppointments = async () => {
  try {
    const response = await axios("http://localhost:3003/appointments");
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getAppointmentById = async (id) => {
  try {
    const response = await axios(
      `http://localhost:3003/appointments/${Number(id)}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const postAppointment = async (dataAppoint, userId) => {
  try {
    // harcodear de momento el id
    const response = await axios.post(
      "http://localhost:3003/appointments/schedule",
      { ...dataAppoint, userId }
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const cancelAppointment = async (id) => {
  try {
    const appoint = await axios.put(
      "http://localhost:3003/appointments/cancel",
      { id: Number(id) }
    );
    return appoint.data;
  } catch (error) {
    console.log(error.message);
  }
};

export {
  getAllAppointments,
  getAppointmentById,
  postAppointment,
  cancelAppointment,
};
