import { Request, Response } from "express";
import { ISession } from "../../interfaces/sessions";
import sessionCreateService from "../../services/sessions/sessionCreate.service";

const sessionCreateController = async (req: Request, res: Response) => {
  const { email, password }: ISession = req.validatedBody as ISession;

  const token = await sessionCreateService({ email, password });

  return res.status(200).json({ token });
};

export default sessionCreateController;
