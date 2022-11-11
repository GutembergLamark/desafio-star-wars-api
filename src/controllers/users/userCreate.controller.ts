import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users";
import userCreateService from "../../services/users/userCreate.service";
import { instanceToPlain } from "class-transformer";

const userCreateController = async (req: Request, res: Response) => {
  const { name, email, password }: IUserRequest =
    req.validatedBody as IUserRequest;

  const user = await userCreateService({ name, email, password });

  res.status(201).json(instanceToPlain(user));
};

export default userCreateController;
