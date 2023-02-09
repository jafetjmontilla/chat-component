import React, { FC, ReactNode } from "react";

interface propsCircle {
  icon: ReactNode;
}

export const CircleIcon: FC<propsCircle> = ({ icon }) => {
  return <div className="asd-rounded-full asd-p-1 asd-w-12 asd-h-12 asd-shadow asd-flex asd-items-center asd-justify-center hover:asd-bg-primary hover:asd-text-white asd-transition asd-ease-in asd-duration-200">{icon}</div>;
};