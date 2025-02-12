import React, { Dispatch, FC, useContext } from "react";
import { StateChatContext, typeSetChatContext } from "../context/ChatContext";
import { Chat } from "./App.types";
import { ContactComponent } from "./ContactComponent";
import { ContainerSwiper } from "./ContainerSwiper";

interface props {
  filterEvent: string | undefined
  setFilterEvent: Dispatch<string | undefined>
}

export const SectionChats: FC<props> = ({ filterEvent, setFilterEvent }) => {
  const { chats, activeSearch, dispatch } = useContext(StateChatContext);
  const handle = (value: Chat) => {
    dispatch({ set: typeSetChatContext.SectionChatShow, value: true })
    dispatch({ set: typeSetChatContext.chat, value: value })
  }
  return (
    <>
      <ContainerSwiper filterEvent={filterEvent} setFilterEvent={setFilterEvent}>
        {!activeSearch && chats?.results?.map((elem: Chat, idx: number) =>
          <ContactComponent
            key={idx}
            _id={elem?._id}
            info={!!elem?.messages?.length ? elem?.messages[elem?.messages?.length - 1].message : "Nuevo chat"}
            image={elem?.photoURL?.split(":")[0] == "https" ? elem?.photoURL : `https://api.bodasdehoy.com${elem?.photoURL}`}
            name={elem?.title}
            onLine={elem?.onLine?.status}
            onClick={() => { handle(elem) }}
          />
        )
        }
      </ContainerSwiper>
    </>
  );
};
