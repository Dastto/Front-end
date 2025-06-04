import { Link } from "react-router";
import React from "react";
import { FILE_BASE_URL } from "~/Services/Setting";
import { Clock, DocumentDownload, Eye } from "iconsax-reactjs";
import convertDuration from "~/Services/PublicFunctions/convertDuration";

interface SongPropsTypes {
  song: any;
}

const Song: React.FC<SongPropsTypes> = ({ song }) => {
  return (
    <div data-aos="fade-up">
      <div
        className={
          "border border-gray-200 bg-white rounded-[30px] p-3 block hover:-translate-y-[10px] transition-all duration-300 ease-in-out"
        }
      >
        <div
          className="box-top w-full h-[230px] overflow-hidden relative rounded-[20px]"
          style={{
            backgroundImage: `url(${FILE_BASE_URL + song?.thumbnail})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Link
            to={`/music/${song?.slug}`}
            className={"block h-full w-full"}
          ></Link>
          <div
            className={
              "w-full h-[42px] absolute bottom-0 bg-white/30 backdrop-blur-lg border-t-2 border-[#DFDDFF5E] right-0 z-10 px-2 flex justify-between items-center"
            }
          >
            <button
              className={
                "flex cursor-pointer justify-center items-center size-[48px] bg-dastto absolute rounded-full right-1/2 translate-x-1/2 origin-center -translate-y-1/2"
              }
            >
              <svg
                width="16"
                viewBox="0 0 7 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={"fill-white"}
              >
                <path d="M6 2.26795C7.33333 3.03775 7.33333 4.96225 6 5.73205L3 7.4641C1.66667 8.2339 5.48398e-07 7.27165 6.15696e-07 5.73205L7.67116e-07 2.26795C8.34414e-07 0.728349 1.66667 -0.233902 3 0.535899L6 2.26795Z" />
              </svg>
            </button>
            <span
              className={
                "inline-flex justify-center items-center gap-1.5 text-sm text-white"
              }
            >
              {convertDuration(song?.duration)}
              <Clock size={18} className={"text-dastto track-2"} />
            </span>
            <span
              className={
                "inline-flex justify-center items-center gap-1.5 text-sm text-white"
              }
            >
              {song?.views}
              <Eye size={18} className={"text-dastto track-2"} />
            </span>
          </div>
        </div>
        <div className={"flex justify-between items-center mt-4 mb-1.5"}>
          <div>
            <Link
              to={`/music/${song?.slug}`}
              className={"font-bold text-lg block"}
            >
              {song?.name}
            </Link>
            <Link
              to={`/music/${song?.slug}`}
              className={"text-sm text-dastto mt-1 block"}
            >
              {song?.singer?.name}
            </Link>
          </div>
          <a
            href={FILE_BASE_URL + song?.song}
            target="_blank"
            className={
              "size-10 cursor-pointer flex justify-center items-center bg-dastto rounded-lg"
            }
          >
            <DocumentDownload color={"#fafafa"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Song;
