import React from "react";
import DinoWidget from "~/Components/Widget/Items/DinoWidget";
import MusicWidget from "~/Components/Widget/Items/MusicWidget";

interface WidgetPropsTypes {
  name: string;
}

const Widget: React.FC<WidgetPropsTypes> = ({ name }) => {
  return (
    <>
      {name === "dino" && <DinoWidget />}
      {name === "music" && <MusicWidget />}
    </>
  );
};

export default Widget;
