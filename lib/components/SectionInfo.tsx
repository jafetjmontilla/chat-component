import React, { FC, useContext, useEffect, useState } from "react";
import { StateChatContext, typeSetChatContext } from "../context/ChatContext";

export const SectionInfo: FC = () => {
  const { contentWidth, contentHeight, topBarSizeY, SectionInfoShow, SectionInfoX, dispatch } = useContext(StateChatContext);
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 50);
  }, [])

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShow(false)
    setTimeout(() => {
      dispatch({ set: typeSetChatContext.SectionInfoShow, value: false })
    }, 100);
  }

  const transitionVisibilite = {
    transition: `opacity 0.4s`,
    opacity: `1`
  }

  const transitionInVisibilite = {
    transition: "opacity 0.4s",
    opacity: `0`,
  }

  return (
    <>
      <div style={show ? transitionVisibilite : transitionInVisibilite} className={`${contentWidth < 769 && "absolute z-20"} bg-white flex flex-col sizeSections${contentWidth} @md:!w-[260px]`}>
        <button onClick={handleClick}>cerrar info</button>
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