import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import Widget from "~/Components/Widget";
import { AnimatePresence, motion } from "framer-motion";
import { FADE_UP, WIDGET_EFFECT } from "~/Services/Setting";
import useWidgetsGrid from "~/Components/Template/Components/Hooks/useWidgetsGrid";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Widgets = () => {
  const { lgLayout, smallLayout, widgets, handleLayoutChange } =
    useWidgetsGrid();

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
            onLayoutChange={handleLayoutChange}
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
