import { Link } from "react-router";
import React from "react";

interface SongPropsTypes {
  song: {
    thumbnail: string;
    duration: string;
    name: string;
    slug: string;
    singer: string;
    song: string;
  };
}

const Song: React.FC<SongPropsTypes> = ({ song }) => {
  return (
    <>
      <Link
        className={"h-[330px] bg-gray-100 rounded-[30px] p-3 block"}
        to={`/${song.slug}`}
      ></Link>
    </>
  );
};

export default Song;
