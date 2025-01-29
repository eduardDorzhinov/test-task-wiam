import * as Yup from "yup";
import { FormLoansFieldTypeEnum, IFormLoansField } from "./types";

export const DEFAULT_DATA = {
  amount: 200,
  time: 10,
};

export const LOANS_FORM_FIELDS: IFormLoansField[] = [
  {
    name: "amount",
    label: "Суммы займа (рубли)",
    type: FormLoansFieldTypeEnum.Slider,
    minValue: 200,
    maxValue: 1000,
    step: 100,
    defaultValue: 200,
    validation: Yup.number().required(),
  },
  {
    name: "time",
    label: "Срок займа (дни)",
    type: FormLoansFieldTypeEnum.Slider,
    minValue: 10,
    maxValue: 30,
    step: 1,
    defaultValue: 10,
    validation: Yup.number().required(),
  },
];
