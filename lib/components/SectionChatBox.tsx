import React, { CSSProperties, FC, RefObject, useContext, useEffect, useRef, useState } from "react";
import { StateChatContext } from "../context/ChatContext";
import { Conversation } from "./Conversation"
import { HeaderChat } from "./HeaderChat";
import { SendMessage } from "./SendMessage";

interface sectionChatBoxProps {
}

export const SectionChatBox: FC<sectionChatBoxProps> = () => {
  const { contentWidth, SectionChatShow, SectionInfoShow, SectionInfoX, SectionChatBoxX } = useContext(StateChatContext);
  const divRef = useRef<any>()
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 5);
  }, [])

  const transitionSizeMax = {
    transition: `width 0.2s`,
    width: `${SectionChatBoxX}px`
  }
  const transitionSizeMin = {
    transition: "width 0.2s",
    width: `${SectionChatBoxX - SectionInfoX}px`,
  }
  const transitionRightOpen = {
    transition: `left 0.4s`,
    left: `0%`
  }
  const transitionRightClose = {
    transition: "left 0.3s",
    left: `100%`,
  }

  return (
    <>
      <div ref={divRef} style={
        !SectionInfoShow ?
          contentWidth > 768 ? transitionSizeMax : SectionChatShow && show ? transitionRightOpen : transitionRightClose
          : contentWidth > 768 ? transitionSizeMin : {}
      } className={`${contentWidth > 768 ? "relative" : `absolute z-10 sizeSections${contentWidth}`} bg-gray-300 flex flex-col`}>
        <HeaderChat />
        <Conversation />
        <SendMessage />
      </div>
    </>
  );
};