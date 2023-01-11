import React, { FC, useContext } from "react";
import { StateChatContext } from "../context/ChatContext";

export const SectionEvents: FC = () => {
  const { contentWidth, contentHeight, topBarSizeY } = useContext(StateChatContext);
  return (
    <>
      <div className={`bg-white flex sizeSections${contentWidth} @md:!w-[280px]`}>
        EVENTS
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
