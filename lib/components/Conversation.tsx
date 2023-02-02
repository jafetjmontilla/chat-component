import React, { useContext, useEffect, useState } from "react"
import { StateChatContext } from "../context";
import { getHour } from "../Util/FormatTime"
import { ItemMessage } from "./ItemMessage"


export const Conversation = () => {
    const { chat, userUid } = useContext(StateChatContext);
    const [messages, setMessage] = useState([])
    //const messages = chat?.messages ? chat.messages : [];
    useEffect(() => {
        console.log("chat", chat)
        //console.log("chat.title", chat.title)

        // setMessage(chat.messages)
        // console.log(`chat de ${chat?.title}`, messages)
        // console.log(`chat?.messages `, chat?.messages)
        // console.log("userUid", userUid)

        document.getElementById('final')?.scrollIntoView(true)
    }, [chat, messages, userUid])


    return (
        <>
            <div className="asd-bg-gray-100 asd-flex asd-flex-col asd-w-full asd-h-full asd-overflow-y-scroll">
                {chat?.messages?.map((elem: any, idx: number) => {
                    return (
                        <ItemMessage key={idx} type={elem.type} emisor={userUid == elem.emitUserUid} message={elem.message} date={getHour(elem.createdAt)} />
                    )
                })}
                <div>
                    <span id="final"></span>
                </div>
            </div>
        </>
    )
}


