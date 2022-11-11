import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { ISession } from "../../interfaces/sessions";
import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../errors/appError";

const sessionCreateService = async ({
  email,
  password,
}: ISession): Promise<string> => {
  const userRespository = AppDataSource.getRepository(User);

  const user = await userRespository.findOneBy({ email: email });

  if (!user) {
    throw new AppError("Invalid user or password", 403);
  }

  const passwordMatch = compareSync(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid user or password", 403);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
    subject: user.id,
  });

  return token;
};

export default sessionCreateService;
