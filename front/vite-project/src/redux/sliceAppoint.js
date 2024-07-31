import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
};

const appointSlice = createSlice({
  name: "appoint",
  initialState,
  reducers: {
    addAppointments: (state, action) => {
      state.appointments = [...action.payload];
    },
    cancelAppoint: (state, action) => {
      state.appointments = state.appointments.map((appointment) =>
        appointment.id === action.payload
          ? { ...appointment, status: "CANCELED" }
          : appointment
      );
    },
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
    logoutAppoint: (state) => {
      state.appointments = [];
    },
  },
});

export const { addAppointments, cancelAppoint, addAppointment, logoutAppoint } =
  appointSlice.actions;
export default appointSlice.reducer;
