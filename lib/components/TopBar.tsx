import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { StateContext } from "../context/chatContext";



export const TopBar: FC = () => {
  const { contentWidth, topBarSizeY } = useContext(StateContext);

  useEffect(() => {
    console.log(789, topBarSizeY)
  }, [topBarSizeY])


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
