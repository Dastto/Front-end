import { useEffect, useRef } from "react";
import useTemplate from "~/Hooks/useTemplate";
import useWidget from "~/Hooks/useWidget";
import POST from "~/Services/Axios/Methods/POST";
import toast from "react-hot-toast";
import { ToastSetting } from "~/Services/Setting";

const useWidgetsGrid = () => {
  const lgLayout = useRef<any>([]);
  const { template } = useTemplate();
  const { widgets } = useWidget();

  useEffect(() => {
    lgLayout.current = widgets?.map((widget: any) => {
      const positions = widget.widget_position;
      return {
        i: "uw-" + widget.id,
        x: positions.x,
        y: positions.y,
        h: parseInt(positions.h),
        w: parseInt(positions.w),
      };
    });

    console.log(lgLayout.current);
  }, [template]);

  const smallLayout = [{ i: "music", x: 0, y: 0, w: 1, h: 1 }];

  const handleLayoutChange = async (e: any) => {
    const response = await POST("/template/widgets/arrangements", {
      layout: e,
    });

    if (response.status !== 200) {
      toast.error("error", ToastSetting);
    }
  };

  return {
    lgLayout,
    smallLayout,
    widgets,
    handleLayoutChange,
  };
};

export default useWidgetsGrid;
