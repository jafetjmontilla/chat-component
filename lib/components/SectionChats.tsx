import React, { FC, MouseEventHandler, useContext, useEffect } from "react";
import { StateChatContext, typeSetChatContext } from "../context/ChatContext";
import { Chat, Chats } from "./App.types";
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
        {chats?.results?.map((elem: any, idx: number) => {
          return (
            <Contact
              key={idx}
              _id={elem?._id}
              info={elem?.messages[elem?.messages?.length - 1].message}
              image={`https://api.bodasdehoy.com${elem?.photoURL}`}
              name={elem?.title}
              onClick={() => { handle(elem) }}
              onLine={elem?.onLine?.status}
            />
          )
        })}

        {/* <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} onLine={true} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} onLine={true} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} /> */}
      </ContainerSwiper>
    </>
  );
};
