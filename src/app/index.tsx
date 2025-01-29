import { Routing } from "./routing/router";
import { StoreProvider } from "./store/provider";
import "./styles/clean.scss";
import "./styles/main.scss";

export const App = () => {
  return (
    <StoreProvider>
      <div className="root">
        <Routing />
      </div>
    </StoreProvider>
  );
};
