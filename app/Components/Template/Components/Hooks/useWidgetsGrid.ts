import { useEffect, useRef } from "react";
import useTemplate from "~/Hooks/useTemplate";
import useWidget from "~/Hooks/useWidget";
import POST from "~/Services/Axios/Methods/POST";
import toast from "react-hot-toast";
import { ToastSetting } from "~/Services/Setting";

const useWidgetsGrid = () => {
  const lgLayout = useRef<any>([]);
  const { template } = useTemplate();
  const { widgets, setWidgets } = useWidget();

  useEffect(() => {
    lgLayout.current = widgets?.map((widget: any, index: number) => {
      const positions = widget.widget_position;
      return {
        i: widget?.widget?.name + index,
        x: positions.x,
        y: positions.y,
        h: parseInt(positions.h),
        w: parseInt(positions.w),
      };
    });
  }, [template]);

  const smallLayout = [{ i: "music", x: 0, y: 0, w: 1, h: 1 }];

  const handleLayoutChange = async (e: any) => {
    let data = e.map((item: { i: string }) => ({
      ...item,
      i: item.i.split("-")[0],
    }));

    const response = await POST("/template/widgets/arrangements", {
      layout: data,
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
