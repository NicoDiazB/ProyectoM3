import { NextFunction, Request, Response } from "express";
import AppointmentDto from "../dto/Appointmentdto";
import { AppointmentModel, UserModel } from "../config/data-source";
import { User } from "../entities/User";

export const validateAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const appointmentData: AppointmentDto = req.body;
  const requiredFields = ["date", "time", "description", "userId"];
  const missingFields = requiredFields.filter(
    (field) => !(field in appointmentData)
  );

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

  const compareDate: Date = new Date();
  const appointmentDataDate = new Date(appointmentData.date);
  if (appointmentDataDate < compareDate) {
    return res
      .status(400)
      .json({ message: "No puedes agendar un día que ya paso" });
  }

  const user = await UserModel.findOne({
    where: { id: appointmentData.userId },
    relations: ["appointments"],
  });
  if (!user) {
    return res.status(400).json({ message: "usuario no encontrado" });
  }

  const haveAppointment = user.appointments.some((appointment) => {
    return (
      appointment.date === appointmentData.date &&
      appointment.time === appointmentData.time
    );
  });
  if (haveAppointment) {
    return res.status(400).json({ message: "Ya tiene un turno a esa hora" });
  }

  next();
};
