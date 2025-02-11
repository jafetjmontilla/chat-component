import React, { FC, useContext } from "react";
import { StateChatContext } from "../context/ChatContext";
import { ContainerSwiper } from "./ContainerSwiper";
import { Contact } from "./Contact";
import { Event } from "./App.types"

export const SectionEvents: FC = () => {
  const { events } = useContext(StateChatContext);

  console.log(100041, events)
  return (
    <>
      <ContainerSwiper>
        {events?.results?.map((elem: Event, idx: number) => {
          return (
            <Contact
              key={idx}
              _id={elem?._id}
              info={"info"}
              image={``}
              name={elem?.nombre}
              onLine={false}
              onClick={() => { }}
            />
          )
        })}
      </ContainerSwiper>
    </>
  );
};
