import React, { FC, useContext, useEffect, useState } from "react";
import { StateChatContext, typeSetChatContext } from "../context/ChatContext";
import { Chat } from "./App.types";
import { Contact } from "./Contact";

export const SectionResultSearch: FC = () => {
  const { contentWidth, resultSearchChat, dispatch } = useContext(StateChatContext);
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 50);
  }, [])

  const handle = (value: Chat) => {
    dispatch({ set: typeSetChatContext.SectionChatShow, value: true })
    dispatch({ set: typeSetChatContext.chat, value: value })
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
      <div style={show ? transitionVisibilite : transitionInVisibilite} className={`asd-bg-white asd-absolute asd-z-10 asd-flex asd-flex-col asd-overflow-y-scroll asd-w-full asd-h-full asd-box-border asd-border-r-4 asd-border-l-4* asd-border-gray-100 sizeSections${contentWidth} @md:!asd-w-[340px]`}>
        <span>{`Encontrados: ${resultSearchChat?.total ? `${resultSearchChat?.total} chats` : ""}`}</span>
        {resultSearchChat?.results?.map((elem: Chat, idx: number) => {
          return (
            <Contact
              key={idx}
              _id={elem?._id}
              info={elem?.messages[elem?.messages?.length - 1].message}
              image={elem?.photoURL?.split(":")[0] == "https" ? elem?.photoURL : `https://api.bodasdehoy.com${elem?.photoURL}`}
              name={elem?.title}
              onLine={elem?.onLine?.status}
              onClick={() => { handle(elem) }}
            />
          )
        })}
      </div>
    </>
  );
};
