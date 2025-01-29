import { FC, ReactNode, useState } from "react";
import { IStoreData } from "./types";
import { DEFAULT_STORE_DATA } from "./config";
import { StoreContext } from "./store";

interface IProps {
  children: ReactNode | ReactNode[],
}

export const StoreProvider: FC<IProps> = ({ children }) => {
  const [store, setStore] = useState<IStoreData>(DEFAULT_STORE_DATA);

  return (
    <StoreContext.Provider
      value={{
        store,
        setStore,
        clearStore: () => setStore(DEFAULT_STORE_DATA),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
