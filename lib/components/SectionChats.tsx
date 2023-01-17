import React, { FC, useContext } from "react";
import { StateChatContext } from "../context/ChatContext";
import { Contact } from "./Contact";

export const SectionChats: FC = () => {
  const { contentWidth } = useContext(StateChatContext);
  return (
    <>
      <div className={`bg-white flex flex-col overflow-y-scroll w-full h-full sizeSections${contentWidth} @md:!w-[280px]`}>
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
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
        <Contact _id={"id"} info={"info"} image={""} name={"nombre"} onClick={() => { }} />
      </div>
    </>
  );
};
