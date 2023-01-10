import React, { Dispatch, FC, forwardRef, LegacyRef, RefObject, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { StateChatContext, typeSetChatContext } from "../context/ChatContext";
import DefaultLayout from "../layouts/DefaultLayout";
import { ButtonBlue } from "./ButtonBlue";
import "../styles.css";
import { Sections } from "./Sections";
import { TopBar } from "./TopBar";


export interface AppProps extends Partial<HTMLDivElement> {
  message: string
}

interface typeSizeContent {
  contentWidth: number | undefined,
  contentHeight: number | undefined,
}

export interface typeSize {
  X: number | undefined,
  Y: number | undefined,
}

export const App: FC<AppProps> = ({ message }) => {
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
    console.log(45, navigator)

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
        <ComponenteRef ref={refDiv} setSize={setSize} />
        <span className="bg-red-300 p-1 rounded-lg absolute md:translate-y-[-50px]">
          {`${message} ${size?.contentWidth} * ${size?.contentHeight}`}
        </span>
        <p className="absolute z-50 translate-x-32 translate-y-96">{`${scrollPosition} ${status} ${size?.contentHeight} ${virtualKeyboard}`}</p>
        <div ref={refScroll} className={`@container flex flex-col bg-orange-500 md:bg-orange-500 overflow-auto sizeContainer${size?.contentWidth}`}>
          <TopBar />
          <Sections />
        </div>
      </DefaultLayout>
      <style>{`
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
}

const ComponenteRef: FC<ComponenteRefProps> = forwardRef(({ setSize }, ref: any) => {
  const { contentWidth, contentHeight, dispatch: chatConetxtDispatch } = useContext(StateChatContext);

  useEffect(() => {
    if (ref.current) {
      chatConetxtDispatch({ set: typeSetChatContext.contentWidth, value: ref.current?.parentElement?.clientWidth })
      chatConetxtDispatch({ set: typeSetChatContext.contentHeight, value: ref.current?.parentElement?.clientHeight })
      chatConetxtDispatch({ set: typeSetChatContext.topBarSizeY, value: 28 })
    }
  }, [ref])

  useEffect(() => {
    setSize({ contentWidth, contentHeight })
  }, [contentWidth, contentHeight])

  return (
    <div ref={ref}></div>
  )
})