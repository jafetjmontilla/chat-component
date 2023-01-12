import React, { FC, useContext } from "react";
import { StateChatContext } from "../context/ChatContext";

export const SectionInfo: FC = () => {
  const { contentWidth, contentHeight, topBarSizeY } = useContext(StateChatContext);
  return (
    <>
      <div className={`bg-white flex sizeSections${contentWidth} @md:!w-[260px] `}>
        INFO
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