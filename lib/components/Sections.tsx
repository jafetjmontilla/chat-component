import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { StateChatContext } from "../context/ChatContext";
import { SectionChatBox } from "./SectionChatBox";
import { SectionChats } from "./SectionChats";
import { SectionInfo } from "./SectionInfo";

export const Sections: FC = () => {
  const { contentWidth, contentHeight, topBarSizeY } = useContext(StateChatContext);
  const [sectionInfoShow, setSectionInfoShow] = useState<boolean>(true)

  return (
    <>
      <div className={`bg-red-500 flex sizeSections${contentWidth}`}>
        <SectionChats />
        {contentWidth > 768 && <SectionChatBox />}
        {contentWidth > 768 && sectionInfoShow && <SectionInfo />}
      </div>
      <style>{`
      .sizeSections${contentWidth}{
        width: ${contentWidth}px;
        height: ${contentHeight - topBarSizeY}px;
      }
      `}</style>
    </>
  );
};
