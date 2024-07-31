import { NextFunction, Request, Response } from "express";
import ICredencialDto from "../dto/credencialDto";
import { CredencialModel } from "../config/data-source";
import { loginUserService } from "../services/usersService";
import { comparePassword } from "../utils/bcrypt";

export const validateLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const credencialData: ICredencialDto = req.body;
  const requiredFields = ["username", "password"];
  const missingFields = requiredFields.filter(
    (field) => !(field in credencialData)
  );

  if (missingFields.length > 0) {
    return res
      .status(400)
      .json({ error: `Faltan datos en el body: ${missingFields.join(", ")}` });
  }
  if (!credencialData.password || !credencialData.password) {
    return res
      .status(400)
      .json({ mensaje: "Debe proporcionar un usuario y contraseña" });
  }
  const isValidUsername = await CredencialModel.findOne({
    where: { username: credencialData.username },
  });
  if (!isValidUsername) {
    return res.status(400).json({ mensaje: "Usuario no existente" });
  }
  const credencial = await CredencialModel.findOne({
    where: { username: credencialData.username },
    select: ["id", "password"],
  });
  if (!credencial) {
    return res.status(404).json({ mensaje: "Las credenciales estan mal" });
  }
  const isValid = comparePassword(credencialData.password, credencial.password);
  if (!isValid) {
    return res.status(400).json({ mensaje: "Las credenciales estan mal" });
  }

  next();
};
