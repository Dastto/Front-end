import { useEffect, useRef, useState } from "react";
import useTemplate from "~/Hooks/useTemplate";
import useWidget from "~/Hooks/useWidget";
import POST from "~/Services/Axios/Methods/POST";
import toast from "react-hot-toast";
import { ToastSetting } from "~/Services/Setting";

const useWidgetsGrid = () => {
  const { widgets } = useWidget();
  const [layouts, setLayouts] = useState({ lg: [], sm: [] });

  useEffect(() => {
    if (!widgets || widgets.length === 0) return;

    const ly = widgets.map((widget: any) => {
      const positions = widget.widget_position;
      return {
        i: "uw-" + widget.id,
        x: positions.x,
        y: positions.y,
        h: parseInt(positions.h),
        w: parseInt(positions.w),
      };
    });

    // @ts-ignore
    setLayouts({ lg: ly, sm: ly });
  }, [widgets]);

  const handleLayoutChange = async (e: any) => {
    // const response = await POST("/template/widgets/arrangements", {
    //   layout: e,
    // });
    //
    // if (response.status !== 200) {
    //   toast.error("error", ToastSetting);
    // }
  };

  return {
    layouts,
    widgets,
    handleLayoutChange,
  };
};

export default useWidgetsGrid;
