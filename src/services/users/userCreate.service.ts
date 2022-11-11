import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";
import { hashSync } from "bcrypt";
import { AppError } from "../../errors/appError";

const userCreateService = async ({
  name,
  email,
  password,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const emailAlreadyExists = await userRepository.findOneBy({ email: email });

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 409);
  }

  const user = userRepository.create({
    name,
    email,
    password: hashSync(password, 10),
  });

  await userRepository.save(user);

  return user;
};

export default userCreateService;
