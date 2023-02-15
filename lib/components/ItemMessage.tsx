import React, { ComponentType, FC, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { StateChatContext } from "../context";
import { MessageChat } from "./App.types";
import { MessageFile } from "./MessageFile";
import { MessageText } from "./MessageText";
import { Interweave, Node } from "interweave";
import { HashtagMatcher, Link, Url, UrlMatcher, UrlProps } from "interweave-autolink";
import { getHour } from "../Util/FormatTime";


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
  message: MessageChat
  // message: string;
  // date: string;
  // emisor?: boolean;
  // type: keyof typeof types;
}

const Af: ComponentType<UrlProps> = () => {
  return (
    <a></a>
  )
}

export const ItemMessage: FC<propsMessage> = ({ message }) => {
  const { userUid } = useContext(StateChatContext);
  const imgRef = useRef<HTMLElement>(null);
  const isSender: boolean = userUid === message?.emitUserUid
  const [single, setSingle] = useState(message?.type === "text");
  const [sizeX, setSizeX] = useState(240);
  const [multimedia, setMultimedia] = useState(message?.video || message.image || message.audio);
  const [singleMultimedia, setSingleMultimedia] = useState(!message.message);
  const [linkUrl, setLinkUrl] = useState(true);

  const transform = (node: HTMLElement, children: Node[]): React.ReactNode => {
    console.log(8877, node.tagName)
    if (node.tagName === 'a') {
      return <Link href={"/"}  >{children}</Link>;
    }
  }

  useEffect(() => {
    if (message?.image) {
      const myImage = new Image()
      myImage.src = message?.image ?? ""
      imgRef.current?.appendChild(myImage)
      setTimeout(() => {
        const x: number | undefined = imgRef.current?.clientWidth
        const y: number | undefined = imgRef.current?.clientHeight
        if (x && y && y * 100 / x > 120) {
          //es horizontal
          setSizeX(175)
        }
      }, 2000);
    }
  }, [message])

  interface pr {

    type: keyof typeof types;
  }

  const replacesLink: ComponentType<UrlProps> = (props) => {
    return <a href={props?.url} target="_blank">{props?.children}</a>
  };

  return (
    <>
      {/* <div
        className={`asd-flex asd-gap-4 asd-items-center ${emisor ? "asd-flex-row-reverse" : ""} `}
      >
        <div className={`${emisor ? "asd-bg-rose-100 asd-mr-4 asd-ml-24 @md:asd-ml-36" : "asd-bg-white asd-ml-4 asd-mr-24 @md:asd-mr-36"} asd-rounded-lg asd-shadow-md asd-mb-0.5 `}>
          {types[type]}
        </div>
      </div> */}
      <div className={`asd-mt-1 ${isSender ? "asd-mr-4 asd-ml-24 @md:asd-ml-36" : "asd-ml-4 asd-mr-24 @md:asd-mr-36"}`} >
        <div className={`asd-flex asd-flex-col asd-relative ${isSender ? "asd-items-end" : "asd-items-start"}`}>
          <div className="asd-shadow-md asd-rounded-lg">
            {multimedia && (
              <>
                <div ref={imgRef as React.RefObject<HTMLDivElement>} className={`${isSender ? "asd-bg-rose-200" : "asd-bg-white"} asd-p-1 asd-w-full asd-text-sm sizeX asd-rounded-t-lg ${singleMultimedia && "asd-rounded-b-md asd-pb-4"} asd-truncate`}>
                </div>
                {linkUrl && (
                  <div className={`${isSender ? "asd-bg-rose-200" : "asd-bg-white"} asd-w-full asd-flex asd-justify-center ${!single && "sizeX"}`} >
                    <a href={message?.url} rel="nofollow noreferrer noopener" target="_blank" className="sizeX  break-words">
                      <div className={`${isSender ? "asd-bg-white" : "asd-bg-gray-100"}  asd-rounded-sm asd-mb-0.5 asd-pr-1 asd-pl-1 asd-text-[0.7rem] ${!single && `asd-ml-1 asd-mr-1`}`}>
                        <span className="asd-block asd-text-[13px] asd-leading-[14px] asd-pt-[2px] asd-line-clamp-3">{message?.title}</span>
                        <span className="asd-block asd-text-[11px] asd-leading-[14px] asd-pl-2 asd-line-clamp-2">{message?.description}</span>
                        <span className="asd-block asd-text-[10px] asd-leading-[14px]">{message?.url}</span>
                      </div>
                    </a>
                  </div>
                )}
                {singleMultimedia && (
                  // <MessageTime createdAt={message?.createdAt} />
                  <p className={`${isSender ? "asd-pr-6" : "asd-pr-2"} asd-text-right asd-text-gray-500 asd-text-[10px] asd-pl-12 asd-w-22 asd-h-4`}>
                    {getHour(message?.createdAt ? message.createdAt : 0)}
                  </p>
                )}
              </>
            )}

            {!singleMultimedia && (
              <>
                <div className={`*asd-p-2 *asd-pb-4 asd-min-w-[100px] ${!single && `sizeX pt-1`} asd-break-words ${isSender ? "asd-bg-rose-200" : "asd-bg-white"} asd-rounded-b-lg ${single && "asd-rounded-t-lg"} asd-text-xs asd-text-white`} >
                  <div className={`${isSender ? "asd-text-black " : "asd-text-black "} asd-break-all asd-pl-2 asd-pt-1 asd-pr-2 asd-text-xs @md:asd-text-sm`}>
                    <Interweave
                      content={message?.message}
                      matchers={[
                        new UrlMatcher('url', {}, replacesLink),
                        new HashtagMatcher('hashtag')
                      ]}
                    />
                  </div>
                  {/* {message?.message} */}
                  {/* <MessageTime createdAt={message?.createdAt} /> */}
                  <p className={`${isSender ? "asd-pr-6" : "asd-pr-2"} asd-text-right asd-text-gray-500 asd-text-[10px] asd-pl-12 asd-w-22 asd-h-4`}>
                    {getHour(message?.createdAt ? message.createdAt : 0)}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <style >{`
        .sizeX {
          width: ${sizeX}px;
        }
      `}</style>
    </>
  );
};
