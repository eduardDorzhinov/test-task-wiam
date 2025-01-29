import { Resolver, useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormLoans } from "../model/types";
import { DEFAULT_DATA, LOANS_FORM_FIELDS } from "../model/config";
import { validationSchema } from "../model/validations";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import cl from "./FormLoans.module.scss";
import { Button } from "antd";
import { useNavigate } from "react-router";
import { ROUTE_PATH } from "../../../app/routing/constants";
import axios from "axios";
import { API } from "../../../app/model/constants";
import { useStore } from "../../../app/store/store";
import { getDataForModal, prepareDataForRequest } from "../lib/helpers";
import { Modal } from "../../../components/modal";
import { FormWidget } from "../../../components/form-widget";
import { IStoreData } from "../../../app/store/types";

interface IProps {
  store: IStoreData;
  setStore: Dispatch<SetStateAction<IStoreData>>;
  clearStore: () => void;
}

export const FormLoansComponent: FC<IProps> = ({
  store,
  setStore,
  clearStore,
}) => {
  const navigate = useNavigate();

  const [ isOpenModal, setIsOpenModal ] = useState(false);

  const methods = useForm<IFormLoans>({
    mode: "onSubmit",
    defaultValues: store.loansForm || DEFAULT_DATA,
    resolver: yupResolver(
      validationSchema,
    ) as unknown as Resolver<IFormLoans>,
  });

  const {
    formState: { isSubmitting },
    getValues,
  } = methods;

  const {
    name,
    lastName,
    amount,
    time,
  } = getDataForModal(store);

  const onSubmit = async (formData: IFormLoans) => {
    setStore(s => ({
      ...s,
      loansForm: formData,
    }));

    try {
      const dataForRequest = prepareDataForRequest({
        ...store,
        loansForm: formData,
      });
      await axios.post(API.PRODUCT_ADD, dataForRequest);
      setIsOpenModal(true);
    } catch (e) {
      console.error("Submit error: ", e);
    }
  };

  const onBack = () => {
    const loansForm = getValues();

    setStore(s => ({
      ...s,
      loansForm,
    }));
    navigate(ROUTE_PATH.FORM_ADDRESS);
  };

  const onCloseModal = () => {
    setIsOpenModal(p => !p);
    navigate(ROUTE_PATH.FORM_PERSONAL_DATA);
    clearStore();
  };

  return (
    <div className={cl.wrap}>
      <FormProvider {...methods}>
        <FormWidget
          formFields={LOANS_FORM_FIELDS}
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
                disabled={isSubmitting}
              >
                Подать заявку
              </Button>
            </div>
          }
        />
      </FormProvider>
      <Modal
        isOpen={isOpenModal}
        onClose={onCloseModal}
      >
        <div className={cl.modal}>
          Поздравляем, {lastName} {name}. Вам одобрена {amount} на {time} дней.
        </div>
      </Modal>
    </div>
  );
};

export const FormLoans: FC = () => {
  const navigate = useNavigate();
  const {
    store,
    setStore,
    clearStore,
  } = useStore();

  useEffect(() => {
    if (!store.personalDataForm || !store.addressForm)
      navigate(ROUTE_PATH.FORM_PERSONAL_DATA);
    // eslint-disable-next-line
  }, []);

  if (!store.personalDataForm || !store.addressForm) {
    return <></>;
  }

  return (
    <FormLoansComponent
      store={store}
      setStore={setStore}
      clearStore={clearStore}
    />
  );
};
