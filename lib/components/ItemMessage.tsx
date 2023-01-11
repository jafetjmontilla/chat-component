import React, { FC, ReactNode } from "react";
import { MessageFile } from "./MessageFile";
import { MessageText } from "./MessageText";

// Definir tipos de datos
type tipos = {
  text: ReactNode;
  file: ReactNode;
};

//Definir tipos posibles
let types: tipos = {
  text: undefined,
  file: undefined,
};

//Definir interfaz de props
interface propsMessage {
  message: string;
  date: string;
  emisor?: boolean;
  type: keyof typeof types;
}

export const ItemMessage: FC<propsMessage> = ({ message, date, emisor = true, type }) => {
  types = {
    text: <MessageText emisor={emisor} date={date} message={message} />,
    file: <MessageFile emisor={emisor} />,
  };
  return (
    <>
      <div
        className={`flex gap-4 items-center ${emisor ? "flex-row-reverse" : ""} `}
      >
        <div className={`${emisor ? "bg-rose-100 mr-4 ml-24 @md:ml-36" : "bg-white ml-4 mr-24 @md:mr-36"} rounded-xl shadow-md mb-0.5 `}>
          {types[type]}
        </div>
      </div>
    </>
  );
};
