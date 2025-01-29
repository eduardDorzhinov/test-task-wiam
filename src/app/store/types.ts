import { Dispatch, SetStateAction } from "react";
import { IFormAddress } from "../../pages/form_address/model/types";
import { IFormLoans } from "../../pages/form_loans/model/types";
import { IFormPersonalData } from "../../pages/form_personal_data/model/types";

export interface IStoreData {
  personalDataForm: IFormPersonalData | null;
  addressForm: IFormAddress | null;
  loansForm: IFormLoans | null;
}

export interface IStore {
  store: IStoreData;
  setStore: Dispatch<SetStateAction<IStoreData>>;
  clearStore: () => void;
}
