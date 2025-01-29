import * as Yup from "yup";
import { FormAddressFieldTypeEnum, IFormAddressField } from "./types";

export const DEFAULT_DATA = {
  work: "",
  address: "",
};

export const ADDRESS_FORM_FIELDS: IFormAddressField[] = [
  {
    name: "work",
    label: "Место работы",
    type: FormAddressFieldTypeEnum.WorkSelect,
    defaultValue: "",
    validation: Yup.string().required("Обязательное поле"),
    isRequired: true,
  },
  {
    name: "address",
    label: "Адрес проживания",
    type: FormAddressFieldTypeEnum.Text,
    defaultValue: "",
    validation: Yup.string().required("Обязательное поле"),
    isRequired: true,
  },
];
