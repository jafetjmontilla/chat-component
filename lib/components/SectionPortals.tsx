import React, { FC, useContext } from "react";
import { StateChatContext } from "../context/ChatContext";
import { ContainerSwiper } from "./ContainerSwiper";

export const SectionPortals: FC = () => {
  const { portals } = useContext(StateChatContext);
  return (
    <>
      <ContainerSwiper>
        PORTALES
      </ContainerSwiper>
    </>
  );
};
