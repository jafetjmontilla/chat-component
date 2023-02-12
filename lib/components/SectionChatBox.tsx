import React, { CSSProperties, FC, RefObject, useContext, useEffect, useRef, useState } from "react";
import { StateChatContext } from "../context/ChatContext";
import { Conversation } from "./Conversation"
import { HeaderChat } from "./HeaderChat";
import { SendMessage } from "./SendMessage";

interface sectionChatBoxProps {
}

export const SectionChatBox: FC<sectionChatBoxProps> = () => {
  const { contentWidth, SectionChatShow, SectionInfoShow, SectionInfoX, SectionChatBoxX, topBarSizeY } = useContext(StateChatContext);
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
    transform: `translateY(-${topBarSizeY}px)`,
    transition: `left 0.4s`,
    left: `0%`
  }
  const transitionRightClose = {
    transform: `translateY(-${topBarSizeY}px)`,
    transition: "left 0.3s",
    left: `100%`,
  }

  return (
    <>
      <div ref={divRef} style={
        !SectionInfoShow ?
          contentWidth > 768 ? transitionSizeMax : SectionChatShow && show ? transitionRightOpen : transitionRightClose
          : contentWidth > 768 ? transitionSizeMin : { transform: `translateY(-${topBarSizeY}px)` }
      } className={`${contentWidth > 768 ? `asd-relative sizeSections${contentWidth}` : `asd-fixed asd-z-20 sizeContainer${contentWidth}`} asd-bg-gray-white asd-flex asd-flex-col`}>
        <HeaderChat />
        <Conversation />
        <SendMessage />
      </div>
    </>
  );
};