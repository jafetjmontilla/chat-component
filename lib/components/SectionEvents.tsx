import React, { Dispatch, FC, useContext } from "react";
import { StateChatContext } from "../context/ChatContext";
import { ContainerSwiper } from "./ContainerSwiper";
import { ContactComponent } from "./ContactComponent";
import { Event } from "./App.types"

interface props {
  setPage: Dispatch<number>
  filterEvent: string | undefined
  setFilterEvent: Dispatch<string | undefined>
}

export const SectionEvents: FC<props> = ({ setPage, filterEvent, setFilterEvent }) => {
  const { events } = useContext(StateChatContext);

  return (
    <>
      <ContainerSwiper filterEvent={filterEvent} setFilterEvent={setFilterEvent} >
        {events?.results?.map((elem: Event, idx: number) => {
          return (
            <ContactComponent
              key={idx}
              _id={elem?._id}
              info={"info"}
              image={``}
              name={elem?.nombre}
              onLine={false}
              onClick={() => {
                setFilterEvent(elem._id)
                setPage(1)
              }}
            />
          )
        })}
      </ContainerSwiper>
    </>
  );
};
