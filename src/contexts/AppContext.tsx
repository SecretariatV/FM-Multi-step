import { IAppProps } from "@utils/typeUtils";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IAppContextType {
  app: IAppProps;
  setApp: Dispatch<SetStateAction<IAppProps>>;
}

const AppContext = createContext<IAppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [app, setApp] = useState<IAppProps>({ step: 0 });
  return (
    <AppContext.Provider value={{ app, setApp }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Error of useApp");
  }

  return context;
};

export { AppProvider, useApp };
