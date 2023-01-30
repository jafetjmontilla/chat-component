import React, { FC, useContext } from "react";
import { StateChatContext } from "../context/ChatContext";

export const SectionContacs: FC = () => {
  const { contentWidth, contentHeight, topBarSizeY } = useContext(StateChatContext);
  return (
    <>
      <div className={`asd-bg-white asd-flex asd-sizeSections${contentWidth} @md:!asd-w-[280px]`}>
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
