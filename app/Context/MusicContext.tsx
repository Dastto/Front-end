import React, { createContext, type ReactNode, useState } from "react";

const MusicContext = createContext<any>(undefined);

interface MusicProviderProps {
  children: ReactNode;
}

const MusicProvider: React.FC<MusicProviderProps> = ({ children }) => {
  const [data, setData] = useState<any>([]);

  return (
    <MusicContext.Provider value={{ setData, data }}>
      {children}
    </MusicContext.Provider>
  );
};

export { MusicProvider, MusicContext };
