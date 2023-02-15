import React, { Dispatch, FC, forwardRef, LegacyRef, RefObject, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { StateChatContext, StateSocketContext, typeSetChatContext } from "../context";
import DefaultLayout from "../layouts/DefaultLayout";
import "../styles.css";
import { Sections } from "./Sections";
import { TopBar } from "./TopBar";
import { AppProps, ResultChats } from "./App.types";

// export interface AppProps extends Partial<HTMLDivElement> {
//   message: string
//   token: string
// }

interface typeSizeContent {
  contentWidth: number | undefined,
  contentHeight: number | undefined,
}

export interface typeSize {
  X: number | undefined,
  Y: number | undefined,
}

export const App: FC<AppProps> = ({ message, token, theme, chats, contacts, events: portals, userUid, sendMessage, handleSearchChat }) => {
  const refDiv = useRef<RefObject<HTMLDivElement>>(null)
  const refScroll = useRef<any>(null)
  const [size, setSize] = useState<typeSizeContent>()
  const [scrollPosition, setScrollPosition] = useState(0);
  const [status, setStatus] = useState<any>(0);
  const [virtualKeyboard, setVirtualKeyboard] = useState<any>(false);
  const handleScroll = () => {
    const position = refScroll.current.scrollTop;
    setScrollPosition(position);
  };

  const handleInnerHeight = () => {
    setStatus(window.innerHeight)

  };

  useEffect(() => {
    refScroll.current.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      refScroll?.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleInnerHeight, { passive: true });
    return () => {
      window?.removeEventListener('resize', handleInnerHeight);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      refScroll.current.scroll({
        top: 10000,
        behavior: "smooth"
      });
    }, 500);
  }, [])

  useEffect(() => {
    setStatus(window.innerHeight)
  }, [window.innerHeight])

  useEffect(() => {
    if ('virtualKeyboard' in navigator) {
      // The VirtualKeyboard API is supported!
      setVirtualKeyboard(true)
    }
  }, [])

  return (
    <>
      <DefaultLayout>
        <ComponenteRef ref={refDiv} setSize={setSize} token={token} chats={chats} contacts={contacts} portals={portals} userUid={userUid} sendMessage={sendMessage} handleSearchChat={handleSearchChat} />
        {/* <span className="asd-bg-white asd-p-1 asd-rounded-lg asd-absolute md:asd-translate-y-[-50px]"> */}
        {/* {`${message} ${size?.contentWidth} * ${size?.contentHeight}`} */}
        {/* </span> */}
        {/* <p className="asd-absolute asd-z-40 asd-translate-x-32 asd-translate-y-96">{`${scrollPosition} ${status} ${size?.contentHeight} ${virtualKeyboard}`}</p> */}
        <div ref={refScroll} className={`asd-@container asd-flex asd-flex-col asd-bg-orange-500 asd-md:bg-orange-500 asd-sizeContainer${size?.contentWidth}`}>
          <TopBar />
          <Sections />
        </div>
      </DefaultLayout>
      <style>{`
      :root {
        --color-primary: ${theme.primaryColor};
        --color-secondary: ${theme.secondaryColor};
        --color-tertiary: ${theme.tertiaryColor};
        --color-base: ${theme.baseColor};
      }
      .sizeContainer${size?.contentWidth}{
        width: ${size?.contentWidth}px;
        height: ${size?.contentHeight}px;
      }
      `}</style>
    </>
  );
}


interface ComponenteRefProps extends Partial<HTMLDivElement> {
  setSize: Dispatch<SetStateAction<typeSizeContent | undefined>>
  ref: any
  token: string
  chats: ResultChats
  contacts: any
  portals: any
  userUid: string
  sendMessage: any
  handleSearchChat: any
}

const ComponenteRef: FC<ComponenteRefProps> = forwardRef(({ setSize, token, chats, contacts, portals, userUid, sendMessage, handleSearchChat }, ref: any) => {
  const { contentWidth, contentHeight, dispatch: chatContextDispatch } = useContext(StateChatContext);
  const { dispatch: socketContextDispach } = useContext(StateSocketContext);


  useEffect(() => {
    console.log("chats cambio", chats)
  }, [chats])
  useEffect(() => {
    console.log("contacts", contacts)
  }, [contacts])
  useEffect(() => {
    console.log("portals", portals)
  }, [portals])


  useEffect(() => {
    if (ref.current) {
      chatContextDispatch({ set: typeSetChatContext.contentWidth, value: ref.current?.parentElement?.clientWidth })
      chatContextDispatch({ set: typeSetChatContext.contentHeight, value: ref.current?.parentElement?.clientHeight })
      chatContextDispatch({ set: typeSetChatContext.topBarSizeY, value: 42 })
      chatContextDispatch({ set: typeSetChatContext.contacts, value: contacts })
      chatContextDispatch({ set: typeSetChatContext.portals, value: portals })
      chatContextDispatch({ set: typeSetChatContext.userUid, value: userUid })
    }
  }, [ref, contacts, portals, userUid])
  useEffect(() => {
    if (ref.current) {
      //chats.results.sort(((a, b) => b.updatedAt - a.updatedAt))
      chatContextDispatch({ set: typeSetChatContext.chats, value: chats })
    }
  }, [chats])
  useEffect(() => {
    if (ref.current) {
      chatContextDispatch({ set: typeSetChatContext.sendMessage, value: sendMessage })
    }
  }, [sendMessage])

  useEffect(() => {
    if (ref.current) {
      chatContextDispatch({ set: typeSetChatContext.handleSearchChat, value: handleSearchChat })
    }
  }, [handleSearchChat])

  useEffect(() => {
    setSize({ contentWidth, contentHeight })
  }, [contentWidth, contentHeight])

  return (
    <div ref={ref} id={ref}></div>
  )
})