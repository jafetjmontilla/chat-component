import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { StateContext, typeSet } from "../../context/chatContext";


export interface ButtonBlueProps extends Partial<HTMLButtonElement> {
  message: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const ButtonBlue: FC<ButtonBlueProps> = ({ message, onClick, className }) => {
  // const { contentWidth, dispatch } = useContext(StateContext);

  // useEffect(() => {
  //   dispatch({ set: typeSet.contentWidth, value: 1000 })
  //   dispatch({ set: typeSet.contentHeight, value: 500 })
  // }, [])

  return (
    <button className={`p-3 bg-gradient-to-r from-blue-100 to-blue-400 @md:to-red-400 rounded-md text-white w-20 h-20 ${className}`} onClick={onClick}>
      {message}
    </button>
  );
};
