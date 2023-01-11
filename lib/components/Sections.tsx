import React, { FC, useContext, useEffect,  useState } from "react";
import { StateChatContext, typeSetChatContext } from "../context/ChatContext";
import { SectionChatBox } from "./SectionChatBox";
import { SectionChats } from "./SectionChats";
import { SectionInfo } from "./SectionInfo";

export const Sections: FC = () => {
  const { contentWidth, contentHeight, topBarSizeY, SectionChatBoxX, dispatch } = useContext(StateChatContext);
  const [sectionInfoShow, setSectionInfoShow] = useState<boolean>(true)

  useEffect(() => {
    dispatch({ set: typeSetChatContext.SectionChatBoxX, value: contentWidth > 768 ? contentWidth - 280 - (sectionInfoShow ? 260 : 0) : contentWidth })
  }, [contentWidth])


  return (
    <>
      <div className={`bg-red-500 flex sizeSections${contentWidth}`}>
        {/* <SectionChats /> */}
        {contentWidth < 769 ? <SectionChatBox /> : <SectionChats />}
        {contentWidth > 768 && <SectionChatBox />}
        {contentWidth > 768 && sectionInfoShow && <SectionInfo />}
      </div>
      <style>{`
      .sizeSections${contentWidth}{
        width: ${contentWidth}px;
        height: ${contentHeight - topBarSizeY}px;
      }
      .sizeSectionChatBox${contentWidth}{
        width: ${SectionChatBoxX}px;
      }
      `}</style>
    </>
  );
};
