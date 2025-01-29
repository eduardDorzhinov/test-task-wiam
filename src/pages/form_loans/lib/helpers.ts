import { IStoreData } from "../../../app/store/types";
import { IFormPersonalData } from "../../form_personal_data/model/types";

export const prepareDataForRequest = (data: IStoreData) => {
  const {
    personalDataForm,
    loansForm,
    addressForm
  } = data;
  const {
    name,
    lastName,
    ...otherFields
  } = personalDataForm as IFormPersonalData;
  return {
    title: `${name} ${lastName}`,
    ...otherFields,
    ...loansForm,
    ...addressForm,
  };
};

export const getDataForModal = (store: IStoreData) => {
  return {
    name: store?.personalDataForm?.name || "",
    lastName: store?.personalDataForm?.lastName || "",
    amount: store?.loansForm?.amount || "",
    time: store?.loansForm?.time || "",
  };
};
