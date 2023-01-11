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
    <div className="h-max w-full bg-white p-2 px-4 flex gap-4 items-center justify-between">
      <div>
        <OptionsSendMessage refInput={refInput} />
      </div>
      <input
        ref={refInput}
        placeholder="Type your message ..."
        className="text-sm focus:ring  rounded-md py-2 px-2 w-full h-full "
        /* autoFocus */
        onChange={(e) => { }}
        value={value}
      />
      <div className="text-gray-700 hover:text-primary cursor-pointer hover:opacity-90 transition button" onClick={() => {
        refInput?.current?.focus()
      }}>
        <SendIcon className="w-5 h-5" />
      </div>
    </div>
  );
}
