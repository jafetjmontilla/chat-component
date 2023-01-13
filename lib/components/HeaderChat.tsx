import React, { FC, useContext } from "react";
import { StateChatContext, typeSetChatContext } from "../context";
import { getRelativeTime } from "../Util/FormatTime";
import { Contact } from "./Contact";

interface headerChatProps {
  chat?: any
}
export const HeaderChat: FC<headerChatProps> = ({ chat }) => {
  const { SectionInfoShow, dispatch } = useContext(StateChatContext);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log(SectionInfoShow)
    dispatch({ set: typeSetChatContext.SectionInfoShow, value: !SectionInfoShow })
  }

  return (
    <div className="bg-rose-400 w-full h-20 flex items-center justify-between">
      <div className="pb-2">
        <Contact key={chat?._id} onClick={() => { }} image={chat?.photoURL} name={chat?.title} info={chat?.onLine?.status ?? chat?._id ? "Online" : chat?.onLine?.status != undefined ? getRelativeTime(chat?.onLine?.dateConection) : <br />} _id={chat?._id} />
        <button onClick={handleClick}>{`${!SectionInfoShow ? "abrir" : "cerrar"}`} info</button>
      </div>
      <div className="flex items-center p-2 gap-2">
      </div>
    </div>
  );
};