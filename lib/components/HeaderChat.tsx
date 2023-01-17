import React, { FC, useContext } from "react";
import { StateChatContext, typeSetChatContext } from "../context";
import { getRelativeTime } from "../Util/FormatTime";
import { Contact } from "./Contact";

interface headerChatProps {
  chat?: any
}
export const HeaderChat: FC<headerChatProps> = ({ chat }) => {
  const { contentWidth, SectionInfoShow, SectionChatShow, dispatch } = useContext(StateChatContext);
  const transitionGo = {
    transition: `left, top, width, height 0.5s, 0.5s, 0.5s, 0.5s`,
    left: "40px",
    top: "40px",
    width: "60px",
    height: "60px"
  }

  const transitionToCome = {
    transition: "left, top, width, height 0.5s, 0.5s, 0.5s, 0.5s",
    left: "150px",
    top: "80px",
    width: "160px",
    height: "160px"
  }

  const openInfo: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ set: typeSetChatContext.SectionInfoShow, value: true })
  }

  const handleChatShow = () => {
    dispatch({ set: typeSetChatContext.SectionChatShow, value: false })
  }

  return (
    <div className="bg-rose-400 w-full h-20 flex items-center justify-between">
      <div className="pb-2">
        {contentWidth < 769 && <button onClick={handleChatShow}>regresar</button>}
        <Contact key={chat?._id} onClick={() => { }} image={chat?.photoURL} name={chat?.title} info={chat?.onLine?.status ?? chat?._id ? "Online" : chat?.onLine?.status != undefined ? getRelativeTime(chat?.onLine?.dateConection) : <br />} _id={chat?._id} />
        <button onClick={openInfo}>abrir info</button>
      </div>
      <div className="flex items-center p-2 gap-2">
      </div>
    </div>
  );
};