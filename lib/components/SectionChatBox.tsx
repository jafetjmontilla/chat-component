import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { StateContext } from "../context/chatContext";

export const SectionChatBox: FC = () => {
  const { contentWidth, contentHeight, topBarSizeY } = useContext(StateContext);
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