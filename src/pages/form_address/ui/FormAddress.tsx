import { Resolver, useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormAddress } from "../model/types";
import { ADDRESS_FORM_FIELDS, DEFAULT_DATA } from "../model/config";
import { validationSchema } from "../model/validations";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import cl from "./FormAddress.module.scss";
import { Button } from "antd";
import { useNavigate } from "react-router";
import { ROUTE_PATH } from "../../../app/routing/constants";
import { useStore } from "../../../app/store/store";
import { FormWidget } from "../../../components/form-widget";
import { IStoreData } from "../../../app/store/types";

interface IProps {
  store: IStoreData;
  setStore: Dispatch<SetStateAction<IStoreData>>;
}

const FormAddressComponent: FC<IProps> = ({
  store,
  setStore
}) => {
  const navigate = useNavigate();

  const methods = useForm<IFormAddress>({
    mode: "onSubmit",
    defaultValues: store.addressForm || DEFAULT_DATA,
    resolver: yupResolver(
      validationSchema,
    ) as unknown as Resolver<IFormAddress>,
  });

  const onSubmit = (formData: IFormAddress) => {
    setStore(s => ({
      ...s,
      addressForm: { ...formData },
    }));
    navigate(ROUTE_PATH.FORM_LOANS);
  };

  const onBack = () => {
    const addressForm = methods.getValues();

    setStore(s => ({
      ...s,
      addressForm,
    }));
    navigate(ROUTE_PATH.FORM_PERSONAL_DATA);
  };

  return (
    <div className={cl.wrap}>
      <FormProvider {...methods}>
        <FormWidget
          formFields={ADDRESS_FORM_FIELDS}
          onSubmit={onSubmit}
          Actions={
            <div className={cl.actions}>
              <Button
                type="default"
                htmlType="button"
                onClick={onBack}
              >
                Назад
              </Button>
              <Button
                type="primary"
                htmlType="submit"
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

export const FormAddress: FC = () => {
  const navigate = useNavigate();
  const {
    store,
    setStore,
  } = useStore();

  useEffect(() => {
    if (!store.personalDataForm) navigate(ROUTE_PATH.FORM_PERSONAL_DATA);
  // eslint-disable-next-line
  }, []);

  if (!store.personalDataForm) {
    return <></>;
  }

  return (
    <FormAddressComponent
      store={store}
      setStore={setStore}
    />
  );
};
