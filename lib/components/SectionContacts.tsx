import React, { Dispatch, FC, useContext } from "react";
import { StateChatContext, typeSetChatContext } from "../context/ChatContext";
import { Chat, OnLine } from "./App.types";
import { Contact } from "./Contact";
import { ContainerSwiper } from "./ContainerSwiper";

interface props {
  setPage: Dispatch<number>
}

export const SectionContacs: FC<props> = ({ setPage }) => {
  const { contacts, chats, dispatch } = useContext(StateChatContext);
  interface propsValue {
    uid: string
    title: string
    photoURL: string
    onLine: OnLine
  }
  const handle = (value: propsValue) => {
    const chatFilter = chats?.results?.filter((elem: any) => elem?.title == value?.title)[0]
    if (chatFilter) {
      dispatch({ set: typeSetChatContext.chat, value: chatFilter })
    }
    dispatch({ set: typeSetChatContext.SectionChatShow, value: true })
    setPage(0)
  }

  return (
    <>
      <ContainerSwiper>
        {contacts?.results?.map((elem: any, idx: number) => {
          return (
            <Contact
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
                handle({
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
