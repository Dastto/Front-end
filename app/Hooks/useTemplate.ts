import { useContext } from "react";
import {
  TemplateContext,
  type TemplateContextType,
} from "~/Context/TemplateContext";

const useTemplate = (): TemplateContextType => {
  const context = useContext(TemplateContext);

  if (!context) {
    throw new Error("useTemplate must be used within an TemplateProvider");
  }

  return context;
};

export default useTemplate;
