import { Link } from "react-router";
import React from "react";
import { FILE_BASE_URL } from "~/Services/Setting";

interface SongPropsTypes {
  song: any;
}

const Song: React.FC<SongPropsTypes> = ({ song }) => {
  console.log(song);

  return (
    <div data-aos="fade-up">
      <Link
        className={
          "h-[330px] bg-white rounded-[30px] p-3 block hover:-translate-y-[10px] transition-all duration-300 ease-in-out"
        }
        to={`/music/${song?.slug}`}
      >
        <div
          className="box-top w-full h-[230px] rounded-[20px]"
          style={{
            backgroundImage: `url(${FILE_BASE_URL + song?.thumbnail})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </Link>
    </div>
  );
};

export default Song;
