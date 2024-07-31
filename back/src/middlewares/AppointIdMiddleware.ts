import { NextFunction, Request, Response } from "express";
import AppointmentDto from "../dto/Appointmentdto";
import { AppointmentModel, UserModel } from "../config/data-source";

export const validateAppointId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const appointment: number = req.body.id;
  const Isvalid = await AppointmentModel.findOne({
    where: { id: appointment },
  });
  if (!Isvalid) {
    res.status(404).json({ message: "Appoint no encontrado" });
  }
  next();
};
