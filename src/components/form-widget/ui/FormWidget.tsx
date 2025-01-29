import { ChangeEvent, FC, ReactNode } from "react";
import cl from "./FormWidget.module.scss";
import { Controller, useFormContext } from "react-hook-form";
import { ComponentWithFloatLabel } from "../../ui/component-with-float-label";
import {
  FormPersonalDataFieldTypeEnum,
  IFormPersonalData,
  IFormPersonalDataField,
} from "../../../pages/form_personal_data/model/types";
import { Input, Select } from "antd";
import clsx from "classnames";
import { getFieldProps } from "../lib/helpers";
import { FormAddressFieldTypeEnum, IFormAddress, IFormAddressField } from "../../../pages/form_address/model/types";
import { WorkSelect } from "../../ui/work-select";
import { FormLoansFieldTypeEnum, IFormLoans, IFormLoansField } from "../../../pages/form_loans/model/types";
import { Slider } from "../../ui/slider";

interface IProps {
  formFields: Array<IFormPersonalDataField | IFormAddressField | IFormLoansField>;
  onSubmit: (val: any) => void;
  Actions: ReactNode;
}

export const FormWidget: FC<IProps> = ({
  formFields,
  onSubmit,
  Actions,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useFormContext<IFormPersonalData | IFormAddress | IFormLoans>();

  return (
    <form
      className={cl.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      {formFields.map(field => {
        const {
          name,
          label,
          type,
          dropdownOptions,
          isRequired,
          mask,
          htmlType,
          defaultValue,
          minValue,
          maxValue,
          step,
        } = getFieldProps(field);

        return (
          <Controller
            key={name}
            control={control}
            name={name}
            render={({
              field: {
                value,
                onBlur,
                onChange,
              },
            }) => (
              <div className={cl.field_wrap}>
                {type === FormLoansFieldTypeEnum.Slider ? (
                  <Slider
                    value={(value || defaultValue || minValue) as number}
                    onChange={onChange}
                    onBlur={onBlur}
                    label={label}
                    minValue={minValue}
                    maxValue={maxValue}
                    step={step}
                    isError={!!errors[name]}
                  />
                ) : (
                  <ComponentWithFloatLabel
                    label={label}
                    placeholder={label}
                    value={value as (string | number)}
                    isRequired={isRequired}
                  >
                    <>
                      {type === FormPersonalDataFieldTypeEnum.Text && (
                        <Input
                          className={clsx(cl.input, !!errors[name] && cl.error)}
                          type={htmlType}
                          value={(value as string) || ""}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            onChange(mask(e.target.value));
                          }}
                          onBlur={onBlur}
                        />
                      )}
                      {type === FormPersonalDataFieldTypeEnum.Select && (
                        <Select
                          className={clsx(cl.select, !!errors[ name ] && cl.error)}
                          onChange={onChange}
                          value={value}
                        >
                          {dropdownOptions?.map(({
                            value,
                            name,
                          }) => (
                            <Select.Option
                              key={value}
                              value={value}
                              optionFontSize={24}
                            >
                              {name}
                            </Select.Option>
                          ))}
                        </Select>
                      )}
                      {type === FormAddressFieldTypeEnum.WorkSelect && (
                        <WorkSelect
                          onChange={onChange}
                          value={value as string}
                          error={errors[name]}
                        />
                      )}
                    </>
                  </ComponentWithFloatLabel>
                )}
                {!!errors[ name ]?.message && (
                  <div className={cl.error_msg}>{errors[ name ].message}</div>
                )}
              </div>
            )}
          />
        );
      })}
      {Actions}
    </form>
  );
};
