import {
  AppDataSource,
  AppointmentModel,
  UserModel,
} from "../config/data-source";
import AppointmentDto from "../dto/Appointmentdto";
import { Appointment } from "../entities/Appointment";
import { IAppointment, Status } from "../interfaces/IAppointment";

export const getAppointmetsServices = async (): Promise<
  Appointment[] | undefined
> => {
  try {
    const appointments = await AppointmentModel.find({ relations: ["user"] });
    return appointments;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const getAppointmetsByIdServices = async (
  id: number
): Promise<Appointment> => {
  try {
    const appoiment = await AppointmentModel.findOneBy({
      id,
    });

    if (!appoiment) {
      throw new Error("Turno no encontrado");
    }
    return appoiment;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const postAppointmetsServices = async (
  userAppointment: AppointmentDto
) => {
  try {
    const newAppointment = AppointmentModel.create(userAppointment);
    await AppointmentModel.save(newAppointment);

    const user = await UserModel.findOneBy({
      id: userAppointment.userId,
    });
    if (user) {
      newAppointment.user = user;
      await AppointmentModel.save(newAppointment);
    }
    return newAppointment;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const cancelAppointmetsServices = async (id: number): Promise<void> => {
  try {
    await AppointmentModel.update(id, {
      status: Status.CANCELED,
    });
  } catch (error: any) {
    throw new Error("la promesa se rompio en service" + error);
  }
};
