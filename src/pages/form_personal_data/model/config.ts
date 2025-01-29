import * as Yup from "yup";
import { FormPersonalDataFieldTypeEnum, IFormPersonalDataField } from "./types";
import { phoneMask } from "../lib/helpers";

const phoneRegExp = /^0\d{3} \d{3} \d{3}$/;
const emptyMask = (str: string) => str;

export const DEFAULT_DATA = {
  phone: "",
  name: "",
  lastName: "",
  sex: "",
};

export const PERSONAL_DATA_FORM_FIELDS: IFormPersonalDataField[] = [
  {
    name: "phone",
    label: "Телефон",
    type: FormPersonalDataFieldTypeEnum.Text,
    defaultValue: "",
    dropdownOptions: [],
    validation: Yup.string()
      .matches(phoneRegExp, "Номер не валидный")
      .required("Обязательное поле"),
    mask: phoneMask,
    isRequired: true,
    htmlType: "tel",
  },
  {
    name: "name",
    label: "Имя",
    type: FormPersonalDataFieldTypeEnum.Text,
    defaultValue: "",
    dropdownOptions: [],
    validation: Yup.string().required("Обязательное поле"),
    mask: emptyMask,
    isRequired: true,
    htmlType: "text",
  },
  {
    name: "lastName",
    label: "Фамилия",
    type: FormPersonalDataFieldTypeEnum.Text,
    defaultValue: "",
    dropdownOptions: [],
    validation: Yup.string().required("Обязательное поле"),
    mask: emptyMask,
    isRequired: true,
    htmlType: "text",
  },
  {
    name: "sex",
    label: "Пол",
    type: FormPersonalDataFieldTypeEnum.Select,
    defaultValue: "",
    dropdownOptions: [
      {
        name: "Мужской",
        value: "Мужской",
      },
      {
        name: "Женский",
        value: "Женский",
      },
    ],
    validation: Yup.string().required("Обязательное поле"),
    mask: emptyMask,
    isRequired: true,
    htmlType: "",
  },
];
