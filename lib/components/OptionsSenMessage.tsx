import React, { FC, ReactNode, useState } from "react";
import { CameraIcon, MicIcon, PlusIcon } from "../icons";
import { CircleIcon } from "./CircleIcon";
import { ContainerIcon } from "./ContainerIcon";
interface OptionsSendMessageProps {
  refInput: any
}
export const OptionsSendMessage: FC<OptionsSendMessageProps> = ({ refInput }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="asd-flex asd-items-center asd-justify-center asd-relative">
      <ContainerIcon>
        <PlusIcon className="asd-w-6 asd-h-6" onClick={() => {
          refInput.current.focus()
          setShow(!show)
        }} />
        <CircleIcon icon={<MicIcon />} />
      </ContainerIcon >
      <div className={`asd-flex asd-flex-col asd-gap-4 asd-absolute asd-bottom-8 `}>
        <CircleIcon icon={<CameraIcon />} />
      </div>
    </div>
  );
};


