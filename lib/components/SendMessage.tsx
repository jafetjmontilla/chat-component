import React, { ChangeEvent, FC, KeyboardEvent, useContext, useEffect, useRef, useState } from "react";
import { StateChatContext } from "../context";
import useDebounce from "../hooks/useDebounce";
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
  const { chat, getScraperMetaData, sendMessage } = useContext(StateChatContext);
  const [value, setValue] = useState<string>("")
  const debouncedValue = useDebounce<string>(value, 200)
  const [mount, setMount] = useState<boolean>(false)
  const [message, setMessage] = useState<any | undefined>(undefined)
  const [type, setType] = useState<string>("text")
  const [height, setHeight] = useState<number | undefined>()

  const refInput = useRef<any>(null)
  const fetch = async (url: string) => {
    console.log("haciendo fetch")
    const resp: any = await getScraperMetaData(url)
    console.log("resp", resp)
    setMessage((old: any) => {
      console.log(old)
      return { ...old, ...resp }
    })
  }

  const handleClick = () => {
    refInput?.current?.focus()
    if (value !== "") {
      sendMessage({ chat: chat, message: message, type: type })
      setValue("")
    }
  }
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //e.preventDefault()
    e.target.rows = 1
    const rowT = refInput?.current ? (refInput?.current.scrollHeight / 16) - 1 : 1
    if (rowT < 5) {
      e.target.rows = rowT
      setHeight(refInput?.current.scrollHeight)
    }
    else {
      e.target.rows = 4
    }
    setValue(e.target.value)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const keyCode = e.key || e.code;
    if (keyCode === "Enter" && !e.shiftKey) {
      handleClick()
    }
  }

  useEffect(() => {
    if (mount) {
      setMessage({ message: value })
      const valueReplace = value.replace("\n", " ")
      const valueSplit = valueReplace.split(" ")
      const url = valueSplit.filter((element: any) => element.toLowerCase().includes("https:"))[0]
      const regex = new RegExp(/^[a-zA-Z0-9][a-zA-Z0-9-_:/?#=]{0,61}[a-zA-Z0-9]{0,1}\.([a-zA-Z]{2,6}|[a-zA-Z0-9-]{1,30}\.[a-zA-Z]{2,3})/);
      if (regex.test(url)) {
        fetch(url)
      }
    }
    setMount(true)
  }, [debouncedValue])

  return (
    <>
      <div style={height ? { height: `${height + 16}px` } : {}} className="asd-h-max asd-z-30 asd-w-full asd-bg-gray-200 asd-p-2 asd-px-4 asd-flex asd-gap-4 asd-items-center asd-justify-between">
        {/* <div className="asd-bg-slate-500 asd-absolute asd-translate-y-[-68px] asd-w-[80%] asd-h-20 asd-rounded-xl"></div> */}
        <div style={height ? { height: `${height}px` } : {}} className="asd-bg-white asd-flex asd-w-full asd-h-8 asd-rounded-xl asd-items-center">
          <textarea
            id="input"
            rows={1}
            ref={refInput}
            placeholder="Type your message ..."
            className="*asd-bg-red-200 asd-text-xs asd-outline-none asd-w-full asd-ml-2 asd-rounded-lg asd-overflow-y-scroll"
            onChange={(e) => { handleChange(e) }}
            onKeyPress={(e) => { handleKeyPress(e) }}
            value={value}
          />
          <div style={height ? { height: `${height}px` } : {}} className={`asd-flex asd-h-8 asd-items-end`}>
            <ContainerIcon className="asd-pl-2 asd-pr-2 asd-pb-[6px]" onClick={handleClick}>
              <SendIcon className="asd-w-5 asd-h-5" />
            </ContainerIcon>
          </div>
        </div>
      </div>
      <style>
        {`
        textarea
          {
            resize: none;
            *border-color: white;
            background: transparent;
            border: none;
            outline: none;
          }
        textarea:focus {
          border-color: white;
          box-shadow: 0 0px 0px rgba(23, 229, 123, 0.701) inset, 0 0 0px rgba(255,144,0,0.6);
        }
      `}
      </style>
    </>
  );
}
