import React, { FC, useContext, useEffect } from "react";
import { StateChatContext } from "../context/ChatContext";



export const TopBar: FC = () => {
  const { contentWidth, topBarSizeY } = useContext(StateChatContext);

  return (
    <>
      <div className={`flex bg-violet-500 size${contentWidth}`}>
        top
      </div>
      <style>{`
      .size${contentWidth}{
        width: ${contentWidth}px;
        height: ${topBarSizeY}px;
      }
      `}</style>
    </>
  );
};
