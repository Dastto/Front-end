import React, {
  createContext,
  type ReactNode,
  useEffect,
  useState,
} from "react";

export interface TemplateContextType {
  template: TemplateDataType;
  setTemplate: (template: TemplateDataType) => void;
  profile: ProfileDataType;
}

export interface TemplateDataType {
  user: {
    mobile: string;
  };
  profile: {
    username: string;
    avatar: string | null;
    name: string;
    bio: string;
    views: number;
  };
  widgets: WidgetType[];
}

export interface ProfileDataType {
  username: string;
  avatar: string | null;
  name: string;
  bio: string;
  views: number;
}

export interface WidgetType {
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

const TemplateContext = createContext<TemplateContextType | undefined>(
  undefined,
);

interface TemplateProviderProps {
  children: ReactNode;
}

const TemplateProvider: React.FC<TemplateProviderProps> = ({ children }) => {
  const [template, setTemplate] = useState<TemplateDataType>({
    user: { mobile: "" },
    profile: {
      username: "",
      avatar: null,
      name: "",
      bio: "",
      views: 0,
    },
    widgets: [],
  });

  const [profile, setProfile] = useState<ProfileDataType>({
    username: "",
    avatar: null,
    name: "",
    bio: "",
    views: 0,
  });

  useEffect(() => {
    setProfile(template.profile);
  }, [template]);

  return (
    <TemplateContext.Provider value={{ template, setTemplate, profile }}>
      {children}
    </TemplateContext.Provider>
  );
};

export { TemplateProvider, TemplateContext };
