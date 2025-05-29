import { useContext } from "react";
import {
  WidgetContext,
  type WidgetContextValue,
} from "~/Context/WidgetContext";

const useWidget = (): WidgetContextValue => {
  const context = useContext(WidgetContext);

  if (!context) {
    throw new Error("useWidget must be used within an WidgetProvider");
  }

  return { ...context };
};

export default useWidget;
