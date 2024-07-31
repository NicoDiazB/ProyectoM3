"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAppointment = void 0;
const data_source_1 = require("../config/data-source");
const validateAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentData = req.body;
    const requiredFields = ["date", "time", "description", "userId"];
    const missingFields = requiredFields.filter((field) => !(field in appointmentData));
    if (missingFields.length > 0) {
        return res
            .status(400)
            .json({ error: `Faltan datos en el body: ${missingFields.join(", ")}` });
    }
    if (!appointmentData.date) {
        return res.status(400).json({ message: "Falta el campo date" });
    }
    if (!appointmentData.time) {
        return res.status(400).json({ message: "Falta el campo time" });
    }
    if (!appointmentData.description) {
        return res.status(400).json({ message: "Falta el campo description" });
    }
    if (!appointmentData.userId) {
        return res
            .status(400)
            .json({ message: "Falta el campo falta el id de usuario" });
    }
    const compareDate = new Date();
    const appointmentDataDate = new Date(appointmentData.date);
    if (appointmentDataDate < compareDate) {
        return res
            .status(400)
            .json({ message: "No puedes agendar un día que ya paso" });
    }
    const user = yield data_source_1.UserModel.findOne({
        where: { id: appointmentData.userId },
        relations: ["appointments"],
    });
    if (!user) {
        return res.status(400).json({ message: "usuario no encontrado" });
    }
    const haveAppointment = user.appointments.some((appointment) => {
        return (appointment.date === appointmentData.date &&
            appointment.time === appointmentData.time);
    });
    if (haveAppointment) {
        return res.status(400).json({ message: "Ya tiene un turno a esa hora" });
    }
    next();
});
exports.validateAppointment = validateAppointment;
