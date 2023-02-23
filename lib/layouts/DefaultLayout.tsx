import React, { FC, ReactNode } from "react";
import { StateChatProvider } from "../context/ChatContext";

const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
        <StateChatProvider>
          {children}
        </StateChatProvider>
    </>
  );
};

export default DefaultLayout;