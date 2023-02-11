import React, { FC, useContext } from "react";
import { StateChatContext, typeSetChatContext } from "../context/ChatContext";
import { Chat } from "./App.types";
import { Contact } from "./Contact";
import { ContainerSwiper } from "./ContainerSwiper";

export const SectionChats: FC = () => {
  const { chats, dispatch } = useContext(StateChatContext);
  const handle = (value: Chat) => {
    dispatch({ set: typeSetChatContext.SectionChatShow, value: true })
    dispatch({ set: typeSetChatContext.chat, value: value })
  }
  return (
    <>
      <ContainerSwiper>
        {chats?.results?.map((elem: Chat, idx: number) => {
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
      </ContainerSwiper>
    </>
  );
};
