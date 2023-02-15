import React, { ChangeEvent, FC, KeyboardEvent, useContext, useRef, useState } from "react";
import { StateChatContext } from "../context";
import { SendIcon } from "../icons";
import { CircleIcon } from "./CircleIcon";
import { ContainerIcon } from "./ContainerIcon";
import { OptionsSendMessage } from "./OptionsSenMessage";

interface propsSendMessage {
  chat?: any
  setChat?: any
  user?: any
}
export const SendMessage: FC<propsSendMessage> = () => {
  const { chat, sendMessage } = useContext(StateChatContext);
  const [value, setValue] = useState<string>("")
  const refInput = useRef<any>(null)

  const handleClick = () => {
    refInput?.current?.focus()
    if (value !== "") {
      sendMessage({ chat: chat, message: value, type: "text" })
      setValue("")
    }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    console.log(444, e.target.value)
  }
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <div className="asd-h-max asd-z-30 asd-w-full asd-bg-gray-200 asd-p-2 asd-px-4 asd-flex asd-gap-4 asd-items-center asd-justify-between">
      <div className="asd-bg-white asd-flex asd-w-full asd-h-8 asd-rounded-full">
        <input
          ref={refInput}
          placeholder="Type your message ..."
          className="asd-text-sm focus:asd-outline-none asd-w-full asd-ml-2 asd-h-full "
          onChange={(e) => { handleChange(e) }}
          onKeyPress={(e) => { handleKeyPress(e) }}
          value={value}
        />
        <ContainerIcon className="asd-pl-2 asd-pr-2" onClick={handleClick}>
          <SendIcon className="asd-w-5 asd-h-5" />
        </ContainerIcon>
      </div>
    </div>
  );
}
