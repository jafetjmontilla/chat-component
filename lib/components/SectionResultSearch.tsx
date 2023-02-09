import React, { FC, useContext, useEffect, useState } from "react";
import { StateChatContext } from "../context/ChatContext";
import { Contact } from "./Contact";

export const SectionResultSearch: FC = () => {
  const { contentWidth } = useContext(StateChatContext);
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 50);
  }, [])

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
      <div style={show ? transitionVisibilite : transitionInVisibilite} className={`asd-bg-white asd-absolute asd-z-50 asd-flex asd-flex-col asd-overflow-y-scroll asd-w-full asd-h-full asd-border-r-4 asd-border-l-4 asd-border-gray-100 sizeSections${contentWidth} @md:!asd-w-[340px]`}>
        resultado busqueda
      </div>
    </>
  );
};
