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
      <div style={show ? transitionVisibilite : transitionInVisibilite} className={`asd-bg-red-500 asd-absolute asd-z-50 asd-flex asd-flex-col asd-overflow-y-scroll asd-w-full asd-h-full sizeSections${contentWidth} @md:!asd-w-[280px]`}>
        resultado busqueda
      </div>
    </>
  );
};
