import React, { createContext, type ReactNode, useState } from "react";
import POST from "~/Services/Axios/Methods/POST";

export interface WidgetContextType {
  name: string | null;
  username: string | null;
  contents: string | null;
  thumbnail: string | null;
  size: string | null;
  widget: {
    name: string | null;
    logo: string | null;
  };
  widget_position: {
    x: string | null;
    y: string | null;
    w: string | null;
    h: string | null;
  };
}

export interface WidgetContextValue {
  widgets: WidgetContextType[];
  setWidgets: React.Dispatch<React.SetStateAction<WidgetContextType[]>>;
  add: (name: string, data?: any) => void;
}

const WidgetContext = createContext<WidgetContextValue | undefined>(undefined);

interface WidgetProviderProps {
  children: ReactNode;
}

const WidgetProvider: React.FC<WidgetProviderProps> = ({ children }) => {
  const [widgets, setWidgets] = useState<WidgetContextType[]>([]);

  const add = async (name: string, data: any) => {
    const response = await POST("/template/widget", {
      name: name,
      ...data,
    });

    if (response.status === 200) {
      setWidgets((prev) => {
        return [
          ...prev,
          {
            name: name,
            username: null,
            contents: null,
            thumbnail: null,
            size: "small",
            widget: {
              name: name,
              logo: null,
            },
            widget_position: {
              x: "0",
              y: "0",
              w: "1",
              h: "1",
            },
          },
        ];
      });
    }
  };

  return (
    <WidgetContext.Provider value={{ widgets, setWidgets, add }}>
      {children}
    </WidgetContext.Provider>
  );
};

export { WidgetProvider, WidgetContext };
