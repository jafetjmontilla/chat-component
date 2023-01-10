import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { StateChatContext } from "../context/ChatContext";

export const SectionChatBox: FC = () => {
  const { contentWidth, contentHeight, topBarSizeY } = useContext(StateChatContext);
  return (
    <>
      <div className={`bg-gray-300 flex ${contentWidth < 769 && `sizeSections${contentWidth}`} md:!grow`}>
        CHAT
      </div>
      {/* <style>{`
      .sizeSectionChatBox${contentWidth}{
        width: ${contentWidth}px;
        height: ${contentHeight - topBarSizeY}px;
      }
      `}</style> */}
    </>
  );
};