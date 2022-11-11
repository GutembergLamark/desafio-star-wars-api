import { Router } from "express";

import userCreateController from "../controllers/users/userCreate.controller";
import validateRequest from "../middlewares/validateRequest.middleware";
import { userCreateSchema } from "../serializer";

const routes = Router();

export const userRoutes = () => {
  routes.post("", validateRequest(userCreateSchema), userCreateController);
  return routes;
};
