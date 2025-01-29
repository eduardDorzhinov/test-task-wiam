import { AnySchema } from "yup";

export interface IFormLoans {
  amount: number;
  time: number;
  phone?: never;
  name?: never;
  lastName?: never;
  sex?: never;
  work?: never;
  address?: never;
}

export enum FormLoansFieldTypeEnum {
  Slider = "slider",
}

export interface IFormLoansField {
  name: keyof IFormLoans;
  label: string;
  type: FormLoansFieldTypeEnum;
  minValue: number;
  maxValue: number;
  step: number;
  defaultValue: number;
  validation: AnySchema | string;
  dropdownOptions?: never;
  isRequired?: never;
  mask?: never;
  htmlType?: never;
}
