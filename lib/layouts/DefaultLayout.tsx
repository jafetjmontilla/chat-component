import React, { FC, ReactNode } from "react";
import { StateChatProvider } from "../context/ChatContext";
import { StateSocketProvider } from "../context/SocketContext";

const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <StateSocketProvider>
        <StateChatProvider>
          {children}
        </StateChatProvider>
      </StateSocketProvider>
    </>
  );
};

export default DefaultLayout;