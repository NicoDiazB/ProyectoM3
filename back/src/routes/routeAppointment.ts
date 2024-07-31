import { Router } from "express";
import {
  cancelAppoinmetsAsync,
  getAppoinmetsByIdAsync,
  getAppointmentsAsync,
  postAppoinmetsAsync,
} from "../controllers/appointmentControllers";
import { validateAppointment } from "../middlewares/appointmentsMiddleware";
import { validateAppointId } from "../middlewares/AppointIdMiddleware";

const routeAppointments: Router = Router();

routeAppointments.get("/", getAppointmentsAsync);
routeAppointments.get("/:id", getAppoinmetsByIdAsync);
routeAppointments.post("/schedule", validateAppointment, postAppoinmetsAsync);
routeAppointments.put("/cancel", validateAppointId, cancelAppoinmetsAsync);

export default routeAppointments;
