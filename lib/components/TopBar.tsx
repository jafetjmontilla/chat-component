import React, { FC, useContext, useEffect } from "react";
import { StateChatContext } from "../context/ChatContext";
import { SearchChat } from "./SearchChat";

interface propsTopBar {
  logo?: JSX.Element
  notifications?: any
  perfil?: JSX.Element
}

export const TopBar: FC<propsTopBar> = ({ logo, notifications, perfil }) => {
  const { contentWidth, topBarSizeY } = useContext(StateChatContext);

  return (
    <>
      <div className={`asd-flex asd-bg-gray-100 asd-border-b-2 asd-border-gray-200 size${contentWidth}`}>
        <SearchChat />
        {contentWidth > 768 && <div className="asd-h-10 asd-grid asd-grid-cols-12 asd-w-full asd-pl-2 asd-pr-2 asd-items-center asd-justify-center">
          {logo && <div className="asd-col-span-8 asd-h-10 asd-flex asd-items-center asd-justify-start">
            {logo}
          </div>}
          <div className="asd-col-span-1 asd-h-10 asd-flex asd-items-center asd-justify-center">
            {notifications}
          </div>
          {perfil && <div className="asd-col-span-3 asd-h-10 asd-flex asd-items-center asd-justify-end">
            {perfil}
          </div>}
        </div>
        }
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
