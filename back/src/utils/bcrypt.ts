import bycript from "bcrypt";

function encryptPassword(password: string): string {
  return bycript.hashSync(password, 10);
}

function comparePassword(password: string, hash: string): boolean {
  try {
    return bycript.compareSync(password, hash);
  } catch (error) {
    console.error("credenciales invalidas", error);
    return false;
  }
}

export { encryptPassword, comparePassword };
