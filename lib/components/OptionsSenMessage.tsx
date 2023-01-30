import React, { FC, ReactNode, useState } from "react";
import { CameraIcon, MicIcon, PlusIcon } from "../icons";
interface OptionsSendMessageProps {
  refInput: any
}
export const OptionsSendMessage: FC<OptionsSendMessageProps> = ({ refInput }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="asd-flex asd-items-center asd-justify-center asd-relative">
      <PlusIcon className="asd-text-gray-500 asd-w-7 asd-h-7 asd-cursor-pointer" onClick={() => {
        refInput.current.focus()
        setShow(!show)
      }} />
      <div className={`asd-flex asd-flex-col asd-gap-4 asd-absolute asd-top-0 -mt-6 asd-transform	-translate-y-full ${show ? "asd-opacity-100" : "asd-opacity-0"}`}>
        <Circle icon={<CameraIcon />} />
        <Circle icon={<MicIcon />} />
      </div>
    </div>
  );
};


interface propsCircle {
  icon: ReactNode;
}

const Circle: FC<propsCircle> = ({ icon }) => {
  return <div className="asd-bg-red asd-rounded-full asd-p-1 asd-w-12 asd-h-12 asd-shadow asd-flex asd-items-center asd-justify-center hover:asd-bg-primary hover:asd-text-white asd-transition asd-ease-in asd-duration-200 asd-cursor-pointer">{icon}</div>;
};