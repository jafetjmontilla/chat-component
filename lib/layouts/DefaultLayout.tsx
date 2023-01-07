import React, { FC } from "react";
import { StateProvider } from "../context/chatContext";

const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <StateProvider>
        {children}
      </StateProvider>
    </>
  );
};

export default DefaultLayout;