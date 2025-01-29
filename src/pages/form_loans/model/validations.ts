import { LOANS_FORM_FIELDS } from "./config";
import { object } from "yup";
import { IFormLoans } from "./types";

const objectSchema = LOANS_FORM_FIELDS.reduce(
  (acc, cur) => {
    acc[cur.name] = cur.validation;
    return acc;
  },
  {} as Record<keyof IFormLoans, any>,
);

const validationSchema = object(objectSchema).defined();

export { validationSchema };
