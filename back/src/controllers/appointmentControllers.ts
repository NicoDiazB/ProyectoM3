import { Request, Response } from "express";
import catchAsync from "../utils/catchAsyc";
import {
  cancelAppointmetsServices,
  getAppointmetsByIdServices,
  getAppointmetsServices,
  postAppointmetsServices,
} from "../services/appointmentsService";
import { Appointment } from "../entities/Appointment";
import AppointmentDto from "../dto/Appointmentdto";

const getAppointments = async (req: Request, res: Response) => {
  // const {userId } = req.query;
  const appointments: Appointment[] | undefined =
    await getAppointmetsServices();
  res.status(200).json(appointments);
};

const getAppoinmetsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const appointment: Appointment = await getAppointmetsByIdServices(
      Number(id)
    );
    res.status(200).json(appointment);
  } catch (error) {
    res.status(404).json({ message: "appointment no encontrado" });
  }
};

const postAppoinmets = async (req: Request, res: Response) => {
  const userAppointment: AppointmentDto = req.body;
  const newAppointment: Appointment = await postAppointmetsServices(
    userAppointment
  );
  res
    .status(200)
    .json({ message: "el turno se creo con exito", newAppointment });
};
const cancelAppoinmets = async (req: Request, res: Response) => {
  const { id } = req.body;
  await cancelAppointmetsServices(Number(id));
  res.status(200).json({ message: "El turno se cancelo con exito" });
};

export const getAppointmentsAsync = catchAsync(getAppointments);
export const getAppoinmetsByIdAsync = catchAsync(getAppoinmetsById);
export const postAppoinmetsAsync = catchAsync(postAppoinmets);
export const cancelAppoinmetsAsync = catchAsync(cancelAppoinmets);
