import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { StateContext } from "../context/chatContext";

export const SectionInfo: FC = () => {
  const { contentWidth, contentHeight, topBarSizeY } = useContext(StateContext);
  return (
    <>
      <div className={`bg-white flex sizeSections${contentWidth} @md:!w-[260px]`}>
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