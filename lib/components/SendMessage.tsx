import React, { FC, useRef, useState } from "react";
import { SendIcon } from "../icons";
import { CircleIcon } from "./CircleIcon";
import { ContainerIcon } from "./ContainerIcon";
import { OptionsSendMessage } from "./OptionsSenMessage";

interface propsSendMessage {
  chat?: any
  setChat?: any
  user?: any
}
export const SendMessage: FC<propsSendMessage> = ({ chat, setChat, user }) => {
  const [value, setValue] = useState<string>()
  const refInput = useRef<any>(null)

  return (
    <div className="asd-h-max asd-w-full asd-bg-gray-200 asd-p-2 asd-px-4 asd-flex asd-gap-4 asd-items-center asd-justify-between">
      <div className="asd-bg-white asd-flex asd-w-full asd-h-8 asd-rounded-full">
        <input
          ref={refInput}
          placeholder="Type your message ..."
          className="asd-text-sm focus:asd-outline-none asd-w-full asd-ml-2 asd-h-full "
          onChange={(e) => { setValue(e.target.value) }}
          value={value}
        />
        <ContainerIcon className="asd-pl-2 asd-pr-2" onClick={() => { refInput?.current?.focus() }}>
          <SendIcon className="asd-w-5 asd-h-5" />
        </ContainerIcon>
      </div>
    </div>
  );
}
