import { Request, Response } from "express";
import {
  getusersService,
  createuserService,
  getUserByIdService,
  loginUserService,
} from "../services/usersService";
import catchAsync from "../utils/catchAsyc";
import { User } from "../entities/User";
import IUserDto from "../dto/UserDto";

const getusers = async (req: Request, res: Response) => {
  const users: User[] | undefined = await getusersService();
  if (users) {
    res.status(200).json(users);
  } else res.status(404).json({ message: "usuarios no encontrados" });
};

const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user: User | null = await getUserByIdService(Number(id));
  if (user) res.status(200).json(user);
  else res.status(404).json({ message: "usuario no encontrado" });
};

const createuser = async (req: Request, res: Response) => {
  const userData: IUserDto = req.body;
  const newUser = await createuserService(userData);
  res.status(201).json({ message: `se creo el usuario` });
};

const loginuser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const id = await loginUserService({ username, password });
  res.status(200).json({ Login: true, message: `usuario logeado`, id });
};

export const getUsersAsync = catchAsync(getusers);
export const getUserByIdAsync = catchAsync(getUserById);
export const createUserAsync = catchAsync(createuser);
export const loginuserAsync = catchAsync(loginuser);
