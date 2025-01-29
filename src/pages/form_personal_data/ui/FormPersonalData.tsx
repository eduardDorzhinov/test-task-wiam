import { Resolver, useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormPersonalData } from "../model/types";
import { DEFAULT_DATA, PERSONAL_DATA_FORM_FIELDS } from "../model/config";
import { validationSchema } from "../model/validations";
import { FC } from "react";
import cl from "./FormPersonalData.module.scss";
import { Button } from "antd";
import { useNavigate } from "react-router";
import { ROUTE_PATH } from "../../../app/routing/constants";
import { useStore } from "../../../app/store/store";
import { FormWidget } from "../../../components/form-widget";

export const FormPersonalData: FC = () => {
  const navigate = useNavigate();
  const {
    store,
    setStore
  } = useStore();

  const methods = useForm<IFormPersonalData>({
    mode: "onSubmit",
    defaultValues: store.personalDataForm || DEFAULT_DATA,
    resolver: yupResolver(
      validationSchema,
    ) as unknown as Resolver<IFormPersonalData>,
  });

  const isSubmitDisabled = Object.keys(methods.formState.errors).length !== 0;

  const onSubmit = (formData: IFormPersonalData) => {
    setStore(s => ({
      ...s,
      personalDataForm: { ...formData },
    }));
    navigate(ROUTE_PATH.FORM_ADDRESS);
  };

  return (
    <div className={cl.wrap}>
      <FormProvider {...methods}>
        <FormWidget
          formFields={PERSONAL_DATA_FORM_FIELDS}
          onSubmit={onSubmit}
          Actions={
            <div className={cl.actions}>
              <Button
                type="primary"
                htmlType="submit"
                disabled={isSubmitDisabled}
              >
                Далее
              </Button>
            </div>
          }
        />
      </FormProvider>
    </div>
  );
};
