import { ReactNode, createContext, useContext, useState } from 'react';

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextType {
  setSomeProp: (prop: string) => void;
  someProp: string;
}

const AppContext = createContext<AppContextType>({
  setSomeProp: () => null,
  someProp: '',
});

function useApp() {
  return useContext(AppContext);
}

function AppProvider(props: AppProviderProps) {
  const [someProp, setSomeProp] = useState<string>('a value');

  return (
    <AppContext.Provider
      value={{
        setSomeProp,
        someProp,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider, useApp };
