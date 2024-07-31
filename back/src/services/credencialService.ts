import { CredencialModel } from "../config/data-source";
import { Credencial } from "../entities/Credencial";
import { comparePassword, encryptPassword } from "../utils/bcrypt";

async function generateCredencial({
  username,
  password,
}: Credencial): Promise<number | undefined> {
  try {
    const hash: string = encryptPassword(password);
    const credencial = await CredencialModel.create({
      username,
      password: hash,
    });
    await CredencialModel.save(credencial);
    return credencial.id;
  } catch (error: any) {
    throw new Error(error);
  }
}

async function checkCredencial({
  username,
  password,
}: Credencial): Promise<number | undefined> {
  try {
    const credencial = await CredencialModel.findOne({
      where: { username },
      select: ["id", "password"],
    });
    if (!credencial) throw "User not found";
    const isValid = comparePassword(password, credencial.password);
    if (!isValid) {
      //* aqui llega y explota con error 500 la app tengo que evitar esto
      throw new Error("credenciales invalidas");
    }
    return credencial.id;
  } catch (error: any) {
    throw new Error(error);
  }
}

export { generateCredencial, checkCredencial };
