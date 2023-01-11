import React, { useEffect, useState } from "react"
import { getHour } from "../Util/FormatTime"
import { ItemMessage } from "./ItemMessage"


export const Conversation = ({ chat, user }: any) => {
    // const [messages, setMessage] = useState([])
    // //const messages = chat?.messages ? chat.messages : [];
    // useEffect(() => {
    //     //console.log("chat", chat)
    //     //console.log("chat.title", chat.title)

    //     setMessage(chat.messages)
    //     console.log(`chat de ${chat.title}`, messages)
    //     console.log(`chat?.messages `, chat?.messages)
    //     console.log("user", user)

    //     document.getElementById('final')?.scrollIntoView(true)
    // }, [chat, messages, user])


    return (
        <div className="bg-gray-100 flex flex-col w-full h-full overflow-y-scroll">
            algo
            {/* {chat?.messages?.map((elem: any, idx: number) => {
                return (
                    <ItemMessage key={idx} type={elem.type} emisor={user.uid == elem.emitUserUid} message={elem.message} date={getHour(elem.createdAt)} />
                )
            })}
            <div>
                <span id="final"></span>
            </div> */}

            <ItemMessage type="text" emisor={false} message={"hola  ---. 10:45 pm"} date={"10:45 pm"} />
            <ItemMessage type="text" emisor={false} message={"como estas"} date={"10:45 pm"} />
            <ItemMessage type="text" emisor={true} message={"esto es un link https://tutorial.eyehunts.com/html/html-p-tag-paragraph-break-font-size-line-space-indent/#:~:text=The%20width%20property%20sets%20the,break%20to%20the%20next%20line."} date={"10:45 pm"} />
            <ItemMessage type="text" emisor={false} message={"esto es otro link https://tailwindcss.com/docs/display#block-and-inline para revisar si salta la linea"} date={"10:45 pm"} />
            <ItemMessage type="text" emisor={false} message={"hola mundo, en este sólo hay palabras nada mas que letras en un párrafo"} date={"10:45 pm"} />
            <ItemMessage type="text" emisor={false} message={"1111111111111111111111111111111111111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222223333333333333333333333333333333333333333333334"} date={"10:45 pm"} />
            <ItemMessage type="text" emisor={true} message={"hola mundo"} date={"10:45 pm"} />
            <ItemMessage type="file" emisor={false} message={"hola mundo"} date={"10:45 pm"} />
            <ItemMessage type="text" emisor={true} message={"hola mundo"} date={"10:45 pm"} />
            <ItemMessage type="file" emisor={false} message={"hola mundo"} date={"10:45 pm"} />
            <ItemMessage type="text" emisor={true} message={"hola mundo"} date={"10:45 pm"} />
            <ItemMessage type="file" emisor={false} message={"hola mundo"} date={"10:45 pm"} />
            <ItemMessage type="text" emisor={true} message={"hola mundo"} date={"10:45 pm"} />
            <ItemMessage type="file" emisor={false} message={"hola mundo"} date={"10:45 pm"} />
            <ItemMessage type="text" emisor={true} message={"hola mundo"} date={"10:45 pm"} />
        </div>
    )
}


