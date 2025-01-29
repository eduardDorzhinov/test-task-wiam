import { ADDRESS_FORM_FIELDS } from "./config";
import { object } from "yup";
import { IFormAddress } from "./types";

const objectSchema = ADDRESS_FORM_FIELDS.reduce(
  (acc, cur) => {
    acc[cur.name] = cur.validation;
    return acc;
  },
  {} as Record<keyof IFormAddress, any>,
);

const validationSchema = object(objectSchema).defined();

export { validationSchema };
