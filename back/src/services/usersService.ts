import { checkCredencial, generateCredencial } from "./credencialService";
import {
  AppDataSource,
  CredencialModel,
  UserModel,
} from "../config/data-source";
import { User } from "../entities/User";
import { Credencial } from "../entities/Credencial";
import IUserDto from "../dto/UserDto";

export const getusersService = async (): Promise<User[]> => {
  try {
    const usersDb = await UserModel.find({
      relations: ["appointments", "credencial"],
    });
    return usersDb;
  } catch (error: any) {
    throw new Error(error);
  }
};
//  esto va a depender del metodo que se use y  lo que retorna | insertResult
export const createuserService = async (userData: IUserDto): Promise<User> => {
  try {
    const credentialId = await generateCredencial({
      username: userData.username,
      password: userData.password,
    });
    const newUser: User = UserModel.create({
      name: userData.name,
      email: userData.email,
      birthday: userData.birthday,
      dni: userData.dni,
      // se puede comentar el el appointment?
      //   appointments: [],
      credencial: credentialId,
    });
    await UserModel.save(newUser);
    return newUser;
  } catch (error: any) {
    throw new Error(error);
  }
};
let ejemplo: string = "algo";
export const getUserByIdService = async (id: number): Promise<User | null> => {
  try {
    const user = UserModel.findOne({
      where: { id: id },
      relations: ["appointments", "credencial"],
    });
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUserService = async (credencial: Credencial) => {
  try {
    const credencialId = await checkCredencial(credencial);
    const credencialUser = await UserModel.findOne({
      where: { id: credencialId },
      relations: ["appointments"],
    });
    return credencialUser;
  } catch (error: any) {
    throw new Error(error);
  }
};
