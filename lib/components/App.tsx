import React, { FC, forwardRef, useContext, useEffect, useRef, useState } from "react";
import "../styles.css";

export interface AppProps extends Partial<HTMLDivElement> {
  message: string
}

export const App: FC<AppProps> = ({ message }) => {


  const refDiv = useRef<any>(null)
  const [contentWidth, SetContentWidth] = useState<number | undefined>()
  const [contentHeight, SetContentHeight] = useState<number | undefined>()
  //const [isMounted, SetIsMounted] = useState<boolean>(false)


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
      <ComponenteReference ref={refDiv} width={contentWidth} height={contentHeight} />
      <div className={`${false && "flex bg-blue-100"} w-[98%] h-[98%]`}>
        {`${message} ${contentWidth} * ${contentHeight}`}
      </div>
    </>
  );
}

const ComponenteReference: FC<any> = forwardRef(({ width, height }: any, ref: any) => {
  return (
    <div ref={ref} />
  )
})