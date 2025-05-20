import React from "react";
import DinoWidget from "~/Components/Widget/Items/DinoWidget";
import MusicWidget from "~/Components/Widget/Items/MusicWidget";

interface WidgetPropsTypes {
  name: string;
}

const Widget: React.FC<WidgetPropsTypes> = ({ name }) => {
  return (
    <div onContextMenu={(e) => e.preventDefault()} className={"size-full"}>
      {name === "dino" && <DinoWidget />}
      {name === "music" && <MusicWidget />}
    </div>
  );
};

export default Widget;
