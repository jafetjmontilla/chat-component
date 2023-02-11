import React, { FC, useContext, useEffect, useState } from "react";
import { StateChatContext, typeSetChatContext } from "../context/ChatContext";
import { SectionChatBox } from "./SectionChatBox";
import { SectionChats } from "./SectionChats";
import { SectionInfo } from "./SectionInfo";
import { SectionResultSearch } from "./SectionResultSearch";
import { SectionSwiper } from "./SectionSwiper";

export const Sections: FC = () => {
  const { contentWidth, contentHeight, topBarSizeY, SectionChatBoxX, SectionInfoShow, SectionChatShow, activeSearch, chat, dispatch } = useContext(StateChatContext);
  const [valirOpenInfo, setValirOpenInfo] = useState<boolean>(false)
  const [valirChatShow, setValirChatShow] = useState<boolean>(false)

  useEffect(() => {
    dispatch({ set: typeSetChatContext.SectionChatBoxX, value: contentWidth > 768 ? contentWidth - 280 : contentWidth })
  }, [contentWidth])

  useEffect(() => {
    if (SectionInfoShow) {
      setTimeout(() => {
        setValirOpenInfo(true)
      }, 200);
    } else {
      setValirOpenInfo(false)
    }
  }, [SectionInfoShow])

  useEffect(() => {
    if (SectionChatShow) {
      setValirChatShow(true)
    } else {
      setTimeout(() => {
        setValirChatShow(false)
      }, 200);
    }
  }, [SectionChatShow])


  const transitionOpacityUp = {
    transition: `opacity 0.4s`,
    opacity: `1`
  }
  const transitionOpacityDown = {
    transition: "opacity 2s",
    opacity: `0`,
  }

  return (
    <>
      <div className={`asd-bg-white asd-flex asd-sizeSections${contentWidth}`}>
        {contentWidth < 769 &&
          !SectionInfoShow && <SectionSwiper />
        }
        {contentWidth < 769 &&
          SectionInfoShow && <SectionInfo />
        }
        {contentWidth < 769 &&
          valirChatShow && <SectionChatBox />
        }
        {contentWidth > 768 && <SectionSwiper />}
        {contentWidth > 768 && SectionChatShow && <SectionChatBox />}
        {contentWidth > 768 && SectionInfoShow && valirOpenInfo && <SectionInfo />}
        {activeSearch && <SectionResultSearch />}
      </div>
      <style>{`
      .sizeSections${contentWidth}{
        width: ${contentWidth}px;
        height: ${contentHeight - topBarSizeY}px;
      }
      .sizeSectionChatBox${contentWidth}{
        width: ${SectionChatBoxX}px !important;
      }      
      `}</style>
    </>
  );
};
