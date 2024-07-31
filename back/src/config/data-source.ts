import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credencial } from "../entities/Credencial";
import { BD_HOST, BD_NAME, BD_PASSWORD, BD_PORT, BD_USERNAME } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: BD_HOST,
  port: BD_PORT,
  username: BD_USERNAME,
  password: BD_PASSWORD,
  database: BD_NAME,
  // dropSchema: true,
  synchronize: true,
  logging: false,
  entities: [User, Appointment, Credencial],
  subscribers: [],
  migrations: [],
});

export const UserModel = AppDataSource.getRepository(User);
export const CredencialModel = AppDataSource.getRepository(Credencial);
export const AppointmentModel = AppDataSource.getRepository(Appointment);
