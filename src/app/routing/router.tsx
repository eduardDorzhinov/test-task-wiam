import { Routes, Route, Navigate } from "react-router";
import { ROUTE_PATH } from "./constants";
import { FormPersonalData } from "../../pages/form_personal_data";
import { FormAddress } from "../../pages/form_address";
import { FormLoans } from "../../pages/form_loans";

export const Routing = () => {
  return (
    <Routes>
      <Route
        path={ROUTE_PATH.ALL}
        element={<Navigate to={ROUTE_PATH.FORM_PERSONAL_DATA} />}
      />
      <Route
        path={ROUTE_PATH.FORM_PERSONAL_DATA}
        element={<FormPersonalData />}
      />
      <Route
        path={ROUTE_PATH.FORM_ADDRESS}
        element={<FormAddress />}
      />
      <Route
        path={ROUTE_PATH.FORM_LOANS}
        element={<FormLoans />}
      />
    </Routes>
  );
};
