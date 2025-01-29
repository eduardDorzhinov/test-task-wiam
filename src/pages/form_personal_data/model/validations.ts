import { PERSONAL_DATA_FORM_FIELDS } from "./config";
import { object } from "yup";
import { IFormPersonalData } from "./types";

const objectSchema = PERSONAL_DATA_FORM_FIELDS.reduce(
  (acc, cur) => {
    acc[cur.name] = cur.validation;
    return acc;
  },
  {} as Record<keyof IFormPersonalData, any>,
);

const validationSchema = object(objectSchema).defined();

export { validationSchema };
