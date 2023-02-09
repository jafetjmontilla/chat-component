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
        className={`asd-flex asd-gap-4 asd-items-center ${emisor ? "asd-flex-row-reverse" : ""} `}
      >
        <div className={`${emisor ? "asd-bg-rose-100 asd-mr-4 asd-ml-24 @md:asd-ml-36" : "asd-bg-white asd-ml-4 asd-mr-24 @md:asd-mr-36"} asd-rounded-lg asd-shadow-md asd-mb-0.5 `}>
          {types[type]}
        </div>
      </div>
    </>
  );
};
