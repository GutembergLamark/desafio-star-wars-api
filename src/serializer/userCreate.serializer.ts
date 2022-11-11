import * as yup from "yup";

import { SchemaOf } from "yup";
import { IUserRequest } from "../interfaces/users";

export const userCreateSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
