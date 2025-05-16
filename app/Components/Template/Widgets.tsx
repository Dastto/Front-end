import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Widgets = () => {
  const largeLayout = [{ i: "a", x: 0, y: 0, w: 4, h: 2 }];

  const smallLayout = [
    { i: "a", x: 0, y: 0, w: 12, h: 2 },
    { i: "b", x: 0, y: 1, w: 12, h: 2 },
    { i: "c", x: 0, y: 2, w: 12, h: 2 },
    { i: "d", x: 0, y: 2, w: 12, h: 2 },
    { i: "e", x: 0, y: 2, w: 12, h: 2 },
    { i: "h", x: 0, y: 2, w: 12, h: 2 },
  ];

  return (
    <div className={" basis-[65%]"}>
      <div className={"dir-ltr"}>
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: largeLayout, sm: smallLayout }}
          breakpoints={{ lg: 810, sm: 0 }}
          cols={{ lg: 12, sm: 12 }}
          isResizable={false}
        >
          <div key="a" className={"rounded-[20px] bg-amber-400"}></div>
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default Widgets;
