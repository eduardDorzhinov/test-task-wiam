import { IFormPersonalDataField } from "../../../pages/form_personal_data/model/types";
import { IFormAddressField } from "../../../pages/form_address/model/types";
import { IFormLoansField } from "../../../pages/form_loans/model/types";

export const getFieldProps = (
  field: IFormPersonalDataField | IFormAddressField | IFormLoansField
) => {
  return {
    name: field?.name || "",
    label: field?.label || "",
    type: field?.type || "",
    dropdownOptions: field?.dropdownOptions || [],
    isRequired: field?.isRequired || false,
    mask: field?.mask || ((val: string) => val),
    htmlType: field?.htmlType || "",
    defaultValue: field?.defaultValue || "",
    minValue: field?.minValue || 0,
    maxValue: field?.maxValue || 0,
    step: field?.step || 0,
  };
};
