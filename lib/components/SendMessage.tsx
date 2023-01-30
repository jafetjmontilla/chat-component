import React, { FC, useRef } from "react";
import { SendIcon } from "../icons";
import { OptionsSendMessage } from "./OptionsSenMessage";

interface propsSendMessage {
  chat?: any
  setChat?: any
  user?: any
}
export const SendMessage: FC<propsSendMessage> = ({ chat, setChat, user }) => {
  const refInput = useRef<any>(null)
  const value = ""

  return (
    <div className="asd-h-max asd-w-full asd-bg-white asd-p-2 asd-px-4 asd-flex asd-gap-4 asd-items-center asd-justify-between">
      <div>
        <OptionsSendMessage refInput={refInput} />
      </div>
      <input
        ref={refInput}
        placeholder="Type your message ..."
        className="asd-text-sm focus:asd-ring  asd-rounded-md asd-py-2 asd-px-2 asd-w-full asd-h-full "
        /* autoFocus */
        onChange={(e) => { }}
        value={value}
      />
      <div className="asd-text-gray-700 hover:asd-text-primary asd-cursor-pointer asd-hover:opacity-90 asd-transition asd-button" onClick={() => {
        refInput?.current?.focus()
      }}>
        <SendIcon className="asd-w-5 asd-h-5" />
      </div>
    </div>
  );
}
