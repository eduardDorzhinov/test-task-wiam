import { AnySchema } from "yup";

export interface IFormAddress {
  work: string;
  address: string;
  phone?: never;
  name?: never;
  lastName?: never;
  sex?: never;
  amount?: never;
  time?: never;
}

export enum FormAddressFieldTypeEnum {
  Text = "text",
  WorkSelect = "work-select",
}

export interface IFormAddressField {
  name: keyof IFormAddress;
  label: string;
  type: FormAddressFieldTypeEnum;
  defaultValue: string;
  validation: AnySchema | string;
  isRequired: boolean;
  htmlType?: never;
  mask?: never;
  dropdownOptions?: never;
  minValue?: never;
  maxValue?: never;
  step?: never;
}
