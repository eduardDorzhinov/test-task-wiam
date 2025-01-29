import { AnySchema } from "yup";

export interface IFormPersonalData {
  phone: string;
  name: string;
  lastName: string;
  sex: string;
  amount?: never;
  time?: never;
  work?: never;
  address?: never;
}

export enum FormPersonalDataFieldTypeEnum {
  Text = "text",
  Select = "select",
}

export interface IFormPersonalDataField {
  name: keyof IFormPersonalData;
  label: string;
  type: FormPersonalDataFieldTypeEnum;
  defaultValue: string;
  dropdownOptions: {
    name: string;
    value: string;
  }[];
  validation: AnySchema | string;
  mask: (v: string) => string;
  isRequired: boolean;
  htmlType: string;
  minValue?: never;
  maxValue?: never;
  step?: never;
}
