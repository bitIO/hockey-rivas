import { ReactNode, createContext, useState } from "react";

interface LayoutProviderProps {
  children: ReactNode;
}
interface LayoutContextType {
  isNavbarOpened: boolean;
  setNavbarOpened: (opened: boolean) => void;
}

const LayoutContext = createContext<LayoutContextType>({
  isNavbarOpened: false,
  setNavbarOpened: (open) => {},
});

function LayoutProvider(props: LayoutProviderProps) {
  const [isNavbarOpened, setNavbarOpened] = useState<boolean>(false);

  return (
    <LayoutContext.Provider value={{ isNavbarOpened, setNavbarOpened }}>
      {props.children}
    </LayoutContext.Provider>
  );
}

export { LayoutContext, LayoutProvider };
