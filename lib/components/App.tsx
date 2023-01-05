import React, { FC, useEffect } from "react";
import "../styles.css";

export interface AppProps extends Partial<HTMLButtonElement> {
  message: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const App = ({ message, onClick }: AppProps) => {

  return (
    <>
      {/* <DefaultLayout> */}
      <button onClick={onClick}>
        {message}
      </button>
      {/* </DefaultLayout> */}
    </>
  );
}
