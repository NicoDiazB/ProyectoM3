"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentControllers_1 = require("../controllers/appointmentControllers");
const appointmentsMiddleware_1 = require("../middlewares/appointmentsMiddleware");
const AppointIdMiddleware_1 = require("../middlewares/AppointIdMiddleware");
const routeAppointments = (0, express_1.Router)();
routeAppointments.get("/", appointmentControllers_1.getAppointmentsAsync);
routeAppointments.get("/:id", appointmentControllers_1.getAppoinmetsByIdAsync);
routeAppointments.post("/schedule", appointmentsMiddleware_1.validateAppointment, appointmentControllers_1.postAppoinmetsAsync);
routeAppointments.put("/cancel", AppointIdMiddleware_1.validateAppointId, appointmentControllers_1.cancelAppoinmetsAsync);
exports.default = routeAppointments;