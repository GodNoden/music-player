"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {
  const onClick = () => { };
  return (
    <div className="flex flex-col">
      <div
        className="
        flex 
        items-center
        justify-between
        px-5
        pt-4
    "
      >
        <div className="
        inline-flex
        items-center
        gap-x-2
        ">
          <TbPlaylist className="text-pink-200" size={26} />
          <p className="
            text-pink-200
            font-medium
            text-md
            ">Your Library</p>
        </div>
        <AiOutlinePlus onClick={onClick} size={20} className="
        text-pink-200
        cursor-pointer
        hover:text-pink-500
        transition
        "/>
      </div>
      <div className="
      flex
      flex-col
      gap-y-2
      mt-4
      px-3
      ">
        List Of Songs!
      </div>
    </div>
  );
};

export default Library;
