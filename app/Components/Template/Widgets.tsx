import React, { useEffect, useRef } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import Widget from "~/Components/Widget";
import logo from "~/Components/Commans/Header/Logo";
import toast from "react-hot-toast";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Widgets = () => {
  const ref = useRef(null);
  const largeLayout = [
    { i: "dino", x: 0, y: 0, w: 1, h: 1 },
    { i: "music", x: 1, y: 0, w: 1, h: 1 },
  ];

  const smallLayout = [
    { i: "a", x: 0, y: 0, w: 12, h: 2 },
    { i: "b", x: 0, y: 1, w: 12, h: 2 },
    { i: "c", x: 0, y: 2, w: 12, h: 2 },
    { i: "d", x: 0, y: 2, w: 12, h: 2 },
    { i: "e", x: 0, y: 2, w: 12, h: 2 },
    { i: "h", x: 0, y: 2, w: 12, h: 2 },
  ];

  const handleStartDrag = (e: any) => {
    // e.map((item: any) => {
    //   if (item.i === "dino") {
    //     console.log(item);
    //     toast.success("Dino has been dragged");
    //   }
    // });
    // console.log(e);
  };

  return (
    <div className={"xl:w-[820px] float-end mt-[70px] ml-[70px]"}>
      <div className={"dir-ltr"}>
        <ResponsiveGridLayout
          className="layout ssssss"
          layouts={{ lg: largeLayout, sm: smallLayout }}
          breakpoints={{ lg: 810, sm: 0 }}
          cols={{ lg: 4, sm: 12 }}
          rowHeight={169}
          isResizable={false}
          margin={[48, 40]}
          containerPadding={[0, 0]}
          onDragStart={handleStartDrag}
        >
          <div key={"dino"} className={""} onClick={() => console.log("ok")}>
            <Widget name={"dino"} />
          </div>
          <div key={"music"} className={""}>
            <Widget name={"music"} />
          </div>
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default Widgets;
