import React, { FC, forwardRef, useContext, useEffect, useRef, useState } from "react";
import { StateContext, typeSet } from "../context/chatContext";
import DefaultLayout from "../layouts/DefaultLayout";
import { ButtonBlue } from "./ButtonBlue";
import "../styles.css";


export interface AppProps extends Partial<HTMLDivElement> {
  message: string
}

export const App: FC<AppProps> = ({ message }) => {
  const refDiv = useRef<any>(null)
  const [size, setSize]: any = useState({})

  useEffect(() => {
    if (1) console.log(1, size)
  }, [size])

  return (
    <>
      <DefaultLayout>
        <ComponenteRef ref={refDiv} message={message} setSize={setSize} />
        <div className={`bg-green-500 sm:bg-gren-100 ${false && "flex !bg-blue-100"} w-[98%] h-[98%]`}>
          {`${message} ${size?.contentWidth} * ${size?.contentHeight}`}
          <ButtonBlue message="AQUI" onClick={() => { alert("algo") }} />
        </div>
      </DefaultLayout>
    </>
  );
}




const ComponenteRef: FC<any> = forwardRef(({ setSize }: any, ref: any,) => {
  const { contentWidth, contentHeight, dispatch } = useContext(StateContext);

  useEffect(() => {
    if (ref.current) {
      dispatch({ set: typeSet.contentWidth, value: ref.current?.parentElement?.clientWidth })
      dispatch({ set: typeSet.contentHeight, value: ref.current?.parentElement?.clientHeight })
    }
  }, [ref])

  useEffect(() => {
    setSize({ contentWidth, contentHeight })
  }, [contentWidth, contentHeight])

  return (
    <div ref={ref}></div>
  )
})