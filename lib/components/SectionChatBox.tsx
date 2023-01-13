import React, { FC, useContext } from "react";
import { StateChatContext } from "../context/ChatContext";
import { Conversation } from "./Conversation"
import { HeaderChat } from "./HeaderChat";
import { SendMessage } from "./SendMessage";

interface sectionChatBoxProps {

}

export const SectionChatBox: FC<sectionChatBoxProps> = () => {
  const { contentWidth, contentHeight, topBarSizeY } = useContext(StateChatContext);
  return (
    <>
      <div className={`bg-gray-300 flex flex-col sizeSectionChatBox${contentWidth}`}>
        {/* CHAT */}
        <HeaderChat />
        <Conversation />
        <SendMessage />
      </div>
      <style>{`
      
      `}</style>
    </>
  );
};