import React, { FC, forwardRef, useContext, useEffect, useRef, useState } from "react";
import "../styles.css";
import { StateProvider } from "../context/chatContext";
//import { AppContext } from '../context/appContext'
import { ButtonBlue } from "./ButtonBlue";

export interface AppProps extends Partial<HTMLDivElement> {
  message: string
}

export const App: FC<AppProps> = ({ message }) => {
  const refDiv = useRef<any>(null)
  const [contentWidth, SetContentWidth] = useState<number | undefined>()
  const [contentHeight, SetContentHeight] = useState<number | undefined>()
  //const [isMounted, SetIsMounted] = useState<boolean>(false)

  //  const [state]: any = useContext(ProductsContext)

  useEffect(() => {
    if (refDiv.current) {
      SetContentWidth(refDiv.current?.parentElement?.clientWidth)
      SetContentHeight(refDiv.current?.parentElement?.clientHeight)
    }
  }, [refDiv.current])

  useEffect(() => {
    console.log(999, contentWidth, contentHeight)
  }, [contentWidth, contentHeight])

  return (
    <>
      <StateProvider>
        {/* <AppProvider> */}
        <ComponenteReference ref={refDiv} width={contentWidth} height={contentHeight} />
        <div className={`${false && "flex bg-blue-100"} w-[98%] h-[98%]`}>
          {`${message} ${contentWidth} * ${contentHeight}`}
          <ButtonBlue message="AQUI" onClick={() => { alert("algo") }} />
        </div>
        {/* </AppProvider> */}
      </StateProvider>
    </>
  );
}

const ComponenteReference: FC<any> = forwardRef(({ width, height }: any, ref: any) => {
  return (
    <div ref={ref} />
  )
})