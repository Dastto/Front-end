import React, { createContext, type ReactNode, useState } from "react";

export interface WidgetContextType {
  name: string;
  username: string;
  contents: string;
  thumbnail: string;
  size: string;
  widget: {
    name: string;
    type: string;
    logo: string;
  };
  widget_position: {
    x: string;
    y: string;
    w: string;
    h: string;
  };
}

export interface WidgetContextValue {
  widget: WidgetContextType;
  setWidget: React.Dispatch<React.SetStateAction<WidgetContextType>>;
}

const WidgetContext = createContext<WidgetContextValue | undefined>(undefined);

interface WidgetProviderProps {
  children: ReactNode;
}

const WidgetProvider: React.FC<WidgetProviderProps> = ({ children }) => {
  const [widget, setWidget] = useState<WidgetContextType>({
    name: "",
    username: "",
    contents: "",
    thumbnail: "",
    size: "",
    widget: {
      name: "",
      type: "",
      logo: "",
    },
    widget_position: {
      x: "",
      y: "",
      w: "",
      h: "",
    },
  });

  return (
    <WidgetContext.Provider value={{ widget, setWidget }}>
      {children}
    </WidgetContext.Provider>
  );
};

export { WidgetProvider, WidgetContext };
