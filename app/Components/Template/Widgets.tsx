import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import Widget from "~/Components/Widget";
import { AnimatePresence, motion } from "framer-motion";
import useTemplate from "~/Hooks/useTemplate";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Widgets = () => {
  const { template } = useTemplate();

  const largeLayout = [
    { i: "dino1", x: 0, y: 0, w: 1, h: 1 },
    { i: "dino2", x: 0, y: 0, w: 1, h: 1 },
    {
      i: "dino3",
      x: 0,
      y: 0,
      w: 1,
      h: 1,
    },
    { i: "music", x: 1, y: 0, w: 1, h: 1 },
  ];

  const smallLayout = [
    { i: "a", x: 0, y: 0, w: 12, h: 2 },
    { i: "b", x: 0, y: 1, w: 12, h: 2 },
    {
      i: "c",
      x: 0,
      y: 2,
      w: 12,
      h: 2,
    },
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

  const fadeUp = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={"xl:w-[820px] float-end my-[70px] ml-[70px]"}
      >
        <div className={"dir-ltr"}>
          <ResponsiveGridLayout
            className="layout"
            layouts={{ lg: largeLayout, sm: smallLayout }}
            breakpoints={{ lg: 810, sm: 0 }}
            cols={{ lg: 4, sm: 12 }}
            rowHeight={169}
            isResizable={false}
            margin={[48, 40]}
            containerPadding={[0, 0]}
            onDragStart={handleStartDrag}
          >
            <motion.div {...fadeUp} key={"dino1"}>
              <Widget name={"dino"} />
            </motion.div>
            <motion.div {...fadeUp} key={"dino2"}>
              <Widget name={"dino"} />
            </motion.div>
            <motion.div {...fadeUp} key={"dino3"}>
              <Widget name={"dino"} />
            </motion.div>
            <motion.div {...fadeUp} key={"music"} className={""}>
              <Widget name={"music"} />
            </motion.div>
          </ResponsiveGridLayout>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Widgets;
