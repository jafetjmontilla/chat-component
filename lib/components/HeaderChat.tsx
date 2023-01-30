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
    <div className="asd-bg-rose-400 asd-w-full asd-h-20 asd-flex asd-items-center asd-justify-between">
      <div className="asd-pb-2">
        {contentWidth < 769 && <button onClick={handleChatShow}>regresar</button>}
        <Contact key={chat?._id} onClick={() => { }} image={chat?.photoURL} name={chat?.title} info={chat?.onLine?.status ?? chat?._id ? "Online" : chat?.onLine?.status != undefined ? getRelativeTime(chat?.onLine?.dateConection) : <br />} _id={chat?._id} />
        <button onClick={openInfo}>abrir info</button>
      </div>
      <div className="asd-flex asd-items-center asd-p-2 asd-gap-2">
      </div>
    </div>
  );
};