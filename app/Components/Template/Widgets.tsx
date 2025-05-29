import React, { useEffect, useRef } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import Widget from "~/Components/Widget";
import { AnimatePresence, motion } from "framer-motion";
import useTemplate from "~/Hooks/useTemplate";
import { FADE_UP, WIDGET_EFFECT } from "~/Services/Setting";
import useWidget from "~/Hooks/useWidget";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Widgets = () => {
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

  const handleStartDrag = (e: any) => {
    console.log(e);
  };

  return (
    <AnimatePresence>
      <motion.div
        {...FADE_UP}
        className={"xl:w-[820px] float-end my-[70px] ml-[70px]"}
      >
        <div className={"dir-ltr"}>
          <ResponsiveGridLayout
            className="layout"
            layouts={{ lg: lgLayout.current, sm: smallLayout }}
            breakpoints={{ lg: 810, sm: 0 }}
            cols={{ lg: 4, sm: 1 }}
            rowHeight={169}
            isResizable={false}
            margin={[48, 40]}
            containerPadding={[0, 0]}
            onDragStop={handleStartDrag}
          >
            {widgets?.map((widget: any, index: number) => (
              <motion.div {...WIDGET_EFFECT} key={widget.widget.name + index}>
                <Widget name={widget.widget.name} />
              </motion.div>
            ))}
          </ResponsiveGridLayout>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Widgets;
