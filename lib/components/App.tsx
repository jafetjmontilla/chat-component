import React, { Dispatch, FC, forwardRef, LegacyRef, RefObject, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { StateChatContext, typeSetChatContext } from "../context";
import DefaultLayout from "../layouts/DefaultLayout";
import "../styles.css";
import { Sections } from "./Sections";
import { TopBar } from "./TopBar";
import { AppProps, ResultChats, ThemeChat } from "./App.types";

interface typeSizeContent {
  contentWidth: number | undefined,
  contentHeight: number | undefined,
}

export interface typeSize {
  X: number | undefined,
  Y: number | undefined,
}

export const App: FC<AppProps> = ({ label, token, theme, chats, contacts, events, userUid, sendMessage, getScraperMetaData, elementLogo, elementNotifications, elementPerfil }) => {
  const refDiv = useRef<RefObject<HTMLDivElement>>(null)
  const refScroll = useRef<any>(null)
  const [scrollPosition, setScrollPosition] = useState(0);
  const [virtualKeyboard, setVirtualKeyboard] = useState<any>(false);
  const handleScroll = () => {
    const position = refScroll.current.scrollTop;
    setScrollPosition(position);
  };

  useEffect(() => {
    refScroll.current.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      refScroll?.current?.removeEventListener('scroll', handleScroll);
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
    if ('virtualKeyboard' in navigator) {
      // The VirtualKeyboard API is supported!
      setVirtualKeyboard(true)
    }
  }, [])

  return (
    <>
      <DefaultLayout>
        <ComponenteRef ref={refDiv} token={token} chats={chats} contacts={contacts} events={events} userUid={userUid} sendMessage={sendMessage} getScraperMetaData={getScraperMetaData} theme={theme} />
        {/* <span className="asd-bg-white asd-p-1 asd-rounded-lg asd-absolute md:asd-translate-y-[-50px]"> */}
        {/* {`${label} ${size?.contentWidth} * ${size?.contentHeight}`} */}
        {/* </span> */}
        {/* <p className="asd-absolute asd-z-40 asd-translate-x-32 asd-translate-y-96">{`${scrollPosition} ${size?.contentHeight} ${virtualKeyboard}`}</p> */}
        <div ref={refScroll} className={`asd-@container asd-flex asd-flex-col asd-w-full asd-h-full`}>
          <TopBar logo={elementLogo} perfil={elementPerfil} notifications={elementNotifications} />
          <div className="asd-flexa asd-w-full asd-flex-1">
            <Sections />
          </div>
        </div>
      </DefaultLayout>
      <style>{`
      :root {
        --color-primary: ${theme.primaryColor};
        --color-secondary: ${theme.secondaryColor};
        --color-tertiary: ${theme.tertiaryColor};
        --color-base: ${theme.baseColor};
      }
      `}</style>
    </>
  );
}


interface ComponenteRefProps extends Partial<HTMLDivElement> {
  ref: any
  token: string
  chats: ResultChats
  contacts: any
  events: any
  userUid: string
  sendMessage: any
  getScraperMetaData: any
  theme: ThemeChat
}

const ComponenteRef: FC<ComponenteRefProps> = forwardRef(({ token, chats, contacts, events, userUid, sendMessage, getScraperMetaData, theme }, ref: any) => {
  const { contentWidth, contentHeight, dispatch } = useContext(StateChatContext);

  const handleInnerHeight = () => {
    dispatch({ set: typeSetChatContext.contentWidth, value: ref.current?.parentElement?.clientWidth })
    dispatch({ set: typeSetChatContext.contentHeight, value: ref.current?.parentElement?.clientHeight })
  };

  useEffect(() => {
    window.addEventListener('resize', handleInnerHeight, { passive: true });
    return () => {
      window?.removeEventListener('resize', handleInnerHeight);
    };
  }, []);

  useEffect(() => {
    console.log("chats cambio", chats)
  }, [chats])
  useEffect(() => {
    console.log("contacts", contacts)
  }, [contacts])
  useEffect(() => {
    console.log("events", events)
  }, [events])

  useEffect(() => {
    if (ref.current) {
      dispatch({ set: typeSetChatContext.contentWidth, value: ref.current?.parentElement?.clientWidth })
      dispatch({ set: typeSetChatContext.contentHeight, value: ref.current?.parentElement?.clientHeight })
      dispatch({ set: typeSetChatContext.topBarSizeY, value: 42 })
      dispatch({ set: typeSetChatContext.contacts, value: contacts })
      dispatch({ set: typeSetChatContext.events, value: events })
      dispatch({ set: typeSetChatContext.userUid, value: userUid })
      dispatch({ set: typeSetChatContext.theme, value: theme })
    }
  }, [ref, contacts, events, userUid])

  useEffect(() => {
    if (ref.current) {
      //chats.results.sort(((a, b) => b.updatedAt - a.updatedAt))
      dispatch({ set: typeSetChatContext.chats, value: chats })
    }
  }, [chats])
  useEffect(() => {
    if (ref.current) {
      dispatch({ set: typeSetChatContext.sendMessage, value: sendMessage })
    }
  }, [sendMessage])

  useEffect(() => {
    if (ref.current) {
      dispatch({ set: typeSetChatContext.getScraperMetaData, value: getScraperMetaData })
    }
  }, [getScraperMetaData])

  return (
    <div ref={ref} id={ref}></div>
  )
})