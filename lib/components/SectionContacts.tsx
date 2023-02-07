import React, { FC, useContext } from "react";
import { StateChatContext } from "../context/ChatContext";
import { Contact } from "./Contact";
import { ContainerSwiper } from "./ContainerSwiper";

export const SectionContacs: FC = () => {
  const { contacts } = useContext(StateChatContext);
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
              image={`https://api.bodasdehoy.com${elem?.photoURL}`}
              name={elem?.nickName}
              onClick={() => { }}
              onLine={elem?.onLine?.status}
            />
          )
        })}
      </ContainerSwiper>
    </>
  );
};
