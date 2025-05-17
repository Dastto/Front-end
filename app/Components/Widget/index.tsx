import React from "react";
import DinoWidget from "~/Components/Widget/Items/DinoWidget";

interface WidgetPropsTypes {
  name: string;
}

const Widget: React.FC<WidgetPropsTypes> = ({ name }) => {
  return <>{name === "dino" && <DinoWidget />}</>;
};

export default Widget;
