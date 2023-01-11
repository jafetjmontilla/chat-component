import React, { FC, ReactNode, useState } from "react";
import { CameraIcon, MicIcon, PlusIcon } from "../icons";
interface OptionsSendMessageProps {
  refInput: any
}
export const OptionsSendMessage: FC<OptionsSendMessageProps> = ({ refInput }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex items-center justify-center relative">
      <PlusIcon className="text-gray-500 w-7 h-7 cursor-pointer" onClick={() => {
        refInput.current.focus()
        setShow(!show)
      }} />
      <div className={`flex flex-col gap-4 absolute top-0 -mt-6 transform	-translate-y-full ${show ? "opacity-100" : "opacity-0"}`}>
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
  return <div className="bg-red rounded-full p-1 w-12 h-12 shadow flex items-center justify-center hover:bg-primary hover:text-white transition ease-in duration-200 cursor-pointer">{icon}</div>;
};