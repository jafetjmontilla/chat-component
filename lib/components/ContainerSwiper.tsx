import React, { FC, ReactNode, useContext, useEffect, useState } from "react";
import { StateChatContext } from "../context";

export const ContainerSwiper: FC<{ children: ReactNode }> = ({ children }) => {
  const { contentWidth } = useContext(StateChatContext);
  const [hover, setHover] = useState<boolean>()

  return (
    <>
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`asd-bg-white asd-mt-2 -asd-mb-2 asd-flex asd-flex-col asd-overflow-y-scroll asd-w-full asd-h-full sizeSections${contentWidth} @md:!asd-w-[340px] asd-fixed  ${!hover && "Scroll-width"}`}>
        {children}
      </div>
      <style>{`
      .Scroll-width::-webkit-scrollbar {
        width: 0;
      }
      `}</style>
    </>
  );
};

