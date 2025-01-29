import { createContext, useContext } from "react";
import { IStore } from "./types";
import { DEFAULT_STORE_DATA } from "./config";

export const StoreContext = createContext<IStore>({
  store: DEFAULT_STORE_DATA,
  setStore: () => null,
  clearStore: () => null,
});

export const useStore = () => {
  return useContext(StoreContext);
};
