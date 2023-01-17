import React, { FC, useContext } from "react";
import { StateChatContext } from "../context/ChatContext";

export const SectionChats: FC = () => {
  const { contentWidth, contentHeight, topBarSizeY } = useContext(StateChatContext);
  return (
    <>
      <div className={`bg-white flex sizeSections${contentWidth} @md:!w-[280px]`}>
        CHATS
      </div>
    </>
  );
};
