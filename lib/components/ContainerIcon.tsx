import React, { FC, HtmlHTMLAttributes, ReactNode, useContext } from "react";
import { StateChatContext } from "../context";

interface propsComp extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}
export const ContainerIcon: FC<propsComp> = (props) => {
  return (
    <>
      <div
        {...props} className={`asd-flex asd-justify-center asd-items-center asd-cursor-pointer ${props.className}`} >
        {props.children}
      </div>
    </>
  );
};
