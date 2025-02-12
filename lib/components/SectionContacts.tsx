import React, { Dispatch, FC, useContext, useEffect } from "react";
import { StateChatContext, typeSetChatContext } from "../context/ChatContext";
import { Chat, OnLine, ResultChats } from "./App.types";
import { ContactComponent } from "./ContactComponent";
import { ContainerSwiper } from "./ContainerSwiper";

interface props {
  setPage: Dispatch<number>
  filterEvent: string | undefined
  setFilterEvent: Dispatch<string | undefined>
}

export const SectionContacs: FC<props> = ({ setPage, filterEvent, setFilterEvent }) => {
  const { contacts, chats, dispatch, events } = useContext(StateChatContext);

  interface propsValue {
    uid: string
    title: string
    photoURL: string
    onLine: OnLine
  }
  const handleClick = (value: propsValue) => {
    const chatFilter = chats?.results?.filter((elem: Chat) => elem?.title == value?.title)[0]
    if (chatFilter) {
      dispatch({ set: typeSetChatContext.chat, value: chatFilter })
    } else {
      const newChat: Chat = {
        title: value.title,
        onLine: value.onLine,
        type: "chatevents",
        addedes: [
          {
            userUid: value.uid,
            type: "participante",
          }
        ],
        messages: [],
        photoURL: value.photoURL,
        _id: ""
      }
      dispatch({ set: typeSetChatContext.chat, value: newChat })
      const newChats: ResultChats = {
        received: new Date().getTime(),
        results: [newChat, ...chats?.results ?? []],
        total: chats?.total ? chats.total : 0
      }
      dispatch({ set: typeSetChatContext.chats, value: newChats })
    }
    dispatch({ set: typeSetChatContext.SectionChatShow, value: true })
    setPage(0)
  }

  return (
    <>
      {!!filterEvent && <div className="asd-flex asd-pl-4 asd-pt-2 asd-relative">
        <span className="asd-text-[10px] asd-translate-y-[2px]">
          Evento: {events.results.find(elem => elem._id === filterEvent)?.nombre}
        </span>
        <span onClick={() => setFilterEvent(undefined)} className="asd-absolute asd-right-4 -asd-translate-y-[2px] asd-cursor-pointer">x</span>
      </div>}
      <ContainerSwiper filterEvent={filterEvent} setFilterEvent={setFilterEvent}>
        {contacts?.results?.filter(elem => elem.eventos?.find(el => filterEvent ? el._id === filterEvent && elem : elem))?.map((elem, idx: number) => {
          return (
            <ContactComponent
              key={idx}
              _id={elem?._id}
              info={
                elem?.eventos && elem?.eventos.map((ele: any, i: number) => {
                  return (
                    <span key={i}>{ele?.nombre}&nbsp;</span>
                  )
                })
              }
              image={elem?.photoURL?.split(":")[0] == "https" ? elem?.photoURL : `https://api.bodasdehoy.com${elem?.photoURL}`}
              name={elem?.nickName}
              //HandleContacts({ setPage, setActive, setContactUid, setChatId, item })
              onClick={() => {
                handleClick({
                  title: elem?.nickName,
                  onLine: elem?.onLine,
                  photoURL: elem?.photoURL,
                  uid: elem?.uid
                })
              }}
              onLine={elem?.onLine?.status}
            />
          )
        })}
      </ContainerSwiper>
    </>
  );
};
