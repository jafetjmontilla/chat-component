import React, { FC, useContext, useEffect } from "react";
import { StateChatContext } from "../context/ChatContext";
import { SearchChat } from "./SearchChat";



export const TopBar: FC = () => {
  const { contentWidth, topBarSizeY } = useContext(StateChatContext);

  return (
    <>
      <div className={`asd-flex asd-bg-gray-100 size${contentWidth}`}>
        <SearchChat onChange={() => { }} />
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
