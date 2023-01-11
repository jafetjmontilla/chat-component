import React, { FC } from "react";
import { getRelativeTime } from "../Util/FormatTime";
import { Contact } from "./Contact";

export const HeaderChat: FC<any> = ({ chat }) => {

  return (
    <div className="bg-rose-400 w-full h-20 flex items-center justify-between">
      <div className="pb-2">
        <Contact key={chat?._id} onClick={() => { }} image={chat?.photoURL} name={chat?.title} info={chat?.onLine?.status ?? chat?._id ? "Online" : chat?.onLine?.status != undefined ? getRelativeTime(chat?.onLine?.dateConection) : <br />} _id={chat?._id} />
      </div>
      <div className="flex items-center p-2 gap-2">
      </div>
    </div>
  );
};