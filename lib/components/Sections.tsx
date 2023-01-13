import React, { FC, useContext, useEffect, useState } from "react";
import { StateChatContext, typeSetChatContext } from "../context/ChatContext";
import { SectionChatBox } from "./SectionChatBox";
import { SectionChats } from "./SectionChats";
import { SectionInfo } from "./SectionInfo";
import { SectionSwiper } from "./SectionSwiper";

export const Sections: FC = () => {
  const { contentWidth, contentHeight, topBarSizeY, SectionChatBoxX, SectionInfoShow, dispatch } = useContext(StateChatContext);
  const [sectionChatShow, setSectionChatShow] = useState<boolean>(false)

  useEffect(() => {
    dispatch({ set: typeSetChatContext.SectionChatBoxX, value: contentWidth > 768 ? contentWidth - 280 - (SectionInfoShow ? 260 : 0) : contentWidth })
  }, [contentWidth])


  return (
    <>
      <div className={`bg-red-500 flex sizeSections${contentWidth}`}>
        {/* <SectionChats /> */}
        {contentWidth < 769 &&
          !sectionChatShow && !SectionInfoShow && <SectionSwiper sectionChatShow={sectionChatShow} setSectionChatShow={setSectionChatShow} />
        }
        {contentWidth < 769 &&
          SectionInfoShow && <SectionInfo />
        }
        {contentWidth < 769 &&
          sectionChatShow && <SectionChatBox />
        }
        {contentWidth > 768 && <SectionChats />}
        {contentWidth > 768 && <SectionChatBox />}
        {contentWidth > 768 && SectionInfoShow && <SectionInfo />}
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
