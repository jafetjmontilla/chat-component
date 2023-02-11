import React, { FC, useContext } from "react";
import { StateChatContext, typeSetChatContext } from "../context";
import { ArrowLeft } from "../icons";
import { getRelativeTime } from "../Util/FormatTime";
import { Contact } from "./Contact";
import { ContainerIcon } from "./ContainerIcon";

export const HeaderChat: FC = () => {
  const { contentWidth, chat, dispatch } = useContext(StateChatContext);
  const openInfo: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ set: typeSetChatContext.SectionInfoShow, value: true })
  }
  const handleChatShow = () => {
    dispatch({ set: typeSetChatContext.SectionChatShow, value: false })
  }
  return (
    <div className="asd-bg-gray-100 asd-z-30 asd-w-full asd-h-16 asd-flex asd-items-center asd-border-b-2 asd-border-gray-200 asd-shadow-md">
      {contentWidth < 769 &&
        <ContainerIcon onClick={handleChatShow}>
          <ArrowLeft className="asd-w-6 asd-h-6" />
        </ContainerIcon >}
      <Contact
        key={chat?._id}
        _id={chat?._id ? chat?._id : ""}
        info={
          chat?.onLine?.status ??
            chat?._id ?
            "Online"
            : chat?.onLine?.status != undefined ?
              getRelativeTime(chat?.onLine?.dateConection) : <br />}
        image={chat?.photoURL?.split(":")[0] == "https" ? chat?.photoURL : `https://api.bodasdehoy.com${chat?.photoURL}`}
        name={chat?.title ? chat?.title : ""}
        onLine={chat?.onLine?.status}
        onClick={openInfo}
      />
    </div>
  );
};