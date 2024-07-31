import { Appointment } from "../entities/Appointment";
import { IAppointment } from "../interfaces/IAppointment";
import { ICredencial } from "../interfaces/ICredential";

// pasarlo a clases *
interface IUserDto {
  name: string;
  email: string;
  birthday: Date;
  dni: number;
  username: string;
  password: string;
}

// export interface IPrueba {
//   id?: number;
//   name: string;
//   email: string;
//   birthday: Date;
//   dni: number;
//   appointments: Appointment[];
// }

export default IUserDto;
