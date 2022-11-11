import { Router } from "express";

import sessionCreateController from "../controllers/sessions/sessionCreate.controller";
import validateRequest from "../middlewares/validateRequest.middleware";
import { sessionCreateSchema } from "../serializer";

const routes = Router();

export const sessionRoutes = () => {
  routes.post(
    "",
    validateRequest(sessionCreateSchema),
    sessionCreateController
  );
  return routes;
};
