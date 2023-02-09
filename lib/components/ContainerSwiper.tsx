import React, { FC, ReactNode, useContext } from "react";
import { StateChatContext } from "../context";

export const ContainerSwiper: FC<{ children: ReactNode }> = ({ children }) => {
  const { contentWidth } = useContext(StateChatContext);
  return (
    <>
      <div className={`asd-bg-white asd-flex asd-flex-col asd-overflow-y-scroll asd-w-full asd-h-full sizeSections${contentWidth} @md:!asd-w-[340px]`}>
        {children}
      </div>
    </>
  );
};

