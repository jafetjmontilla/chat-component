import React, { FC, useContext, useEffect, useState } from "react";
import { StateChatContext, typeSetChatContext } from "../context/ChatContext";
import { ArrowLeft, Close } from "../icons";
import { CircleImage } from "./CircleImage";
import { ContainerIcon } from "./ContainerIcon";

export const SectionInfo: FC = () => {
  const { contentWidth, topBarSizeY, chat, sendMessage, dispatch } = useContext(StateChatContext);
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowInfo(true)
    }, 50);
  }, [])

  const handleClick = () => {
    setShowInfo(false)
    setTimeout(() => {
      dispatch({ set: typeSetChatContext.SectionInfoShow, value: false })
    }, 100);
  }

  const transitionVisibilite = {
    transform: `translateY(-${contentWidth < 768 ? topBarSizeY : 0}px)`,
    transition: `opacity 0.4s`,
    opacity: `1`
  }
  const transitionInVisibilite = {
    transform: `translateY(-${contentWidth < 768 ? topBarSizeY : 0}px)`,
    transition: "opacity 0.4s",
    opacity: `0`,
  }

  return (
    <>
      <div style={showInfo ? transitionVisibilite : transitionInVisibilite} className={`${contentWidth < 769 && "asd-absolute asd-z-50"} asd-bg-gray-200 asd-flex asd-flex-col ${contentWidth < 769 ? `asd-w-[100vw]` : `asd-flex-1`} @md:!asd-w-[360px]`}>
        <ContainerIcon className="asd-absolute asd-pl-1 asd-pt-3" onClick={handleClick}>
          {contentWidth < 769 ? <ArrowLeft className="asd-w-6 asd-h-6" /> : <Close className="asd-w-6 asd-h-6" />}
        </ContainerIcon>
        <div className="asd-bg-white asd-flex asd-flex-col asd-items-center asd-w-full asd-p-4">
          <CircleImage
            image={chat?.photoURL?.split(":")[0] == "https" ? chat?.photoURL : `https://api.bodasdehoy.com${chat?.photoURL}`}
            name={chat?.title ? chat?.title : ""}
            onLine={chat?.onLine?.status}
            classNameOnlySize={"asd-w-40 asd-h-40"}
          />
          <span >{chat?.title}</span>
        </div>
      </div>
    </>
  );
};