import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { StateChatContext } from "../context/ChatContext";

export const SectionChats: FC = () => {
  const { contentWidth, contentHeight, topBarSizeY } = useContext(StateChatContext);
  return (
    <>
      <div className={`bg-white flex sizeSections${contentWidth} @md:!w-[280px]`}>
        CONTACTS
      </div>
      {/* <style>{`
      .sizeSectionChat${contentWidth}{
        width: ${contentWidth}px;
        height: ${contentHeight - topBarSizeY}px;
      }
      `}</style> */}
    </>
  );
};
