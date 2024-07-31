"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentModel = exports.CredencialModel = exports.UserModel = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Appointment_1 = require("../entities/Appointment");
const Credencial_1 = require("../entities/Credencial");
const envs_1 = require("./envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.BD_HOST,
    port: envs_1.BD_PORT,
    username: envs_1.BD_USERNAME,
    password: envs_1.BD_PASSWORD,
    database: envs_1.BD_NAME,
    synchronize: true,
    logging: false,
    entities: [User_1.User, Appointment_1.Appointment, Credencial_1.Credencial],
    subscribers: [],
    migrations: [],
});
exports.UserModel = exports.AppDataSource.getRepository(User_1.User);
exports.CredencialModel = exports.AppDataSource.getRepository(Credencial_1.Credencial);
exports.AppointmentModel = exports.AppDataSource.getRepository(Appointment_1.Appointment);
