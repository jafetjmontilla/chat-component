import React, { useContext, useEffect, useRef, useState } from "react"
import { StateChatContext } from "../context";
import { getDate, getHour } from "../Util/FormatTime"
import { MessageChat } from "./App.types";
import { ItemMessage } from "./ItemMessage"

interface ChatReduce extends MessageChat {
    bandera: string
}

export const Conversation = () => {
    const { chat } = useContext(StateChatContext);
    const [chatReduce, setChatReduce] = useState<ChatReduce[]>([])
    const refDiv = useRef(null)
    useEffect(() => {
        let valirBandera: string | null = null
        const chatReduce: ChatReduce[] = chat?.messages.reduce((acc: any, item: MessageChat) => {
            let bandera: string | null = null
            if (valirBandera != getDate(item.createdAt)) {
                valirBandera = getDate(item.createdAt)
                bandera = valirBandera
                acc.push({ bandera })
            }
            acc.push({ bandera: null, ...item })
            return acc;
        }, []);
        setChatReduce(chatReduce)
        console.log("creaado div")
        setTimeout(() => {
            document.getElementById('final')?.scrollIntoView(true)
        }, 200);
    }, [chat?.messages])



    return (
        <>
            <div className="asd-bg-white asd-flex asd-flex-col asd-w-full asd-h-full asd-overflow-y-scroll">
                {chatReduce?.map((elem: any, idx: number) => {
                    return (
                        <>{
                            elem?.bandera ?
                                <div key={idx} className="flex justify-center">
                                    <span className="asd-bg-gray-100 asd-text-gray-700 asd-text-[10px] asd-p-1 asd-rounded-full">{elem?.bandera}</span>
                                </div> :
                                <ItemMessage key={idx} message={elem} />
                        }</>
                    )
                })}
                <div>
                    <span id="final"></span>
                </div>
            </div>
        </>
    )
}


