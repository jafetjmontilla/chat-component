import React, { FC, MouseEventHandler } from "react";

interface propsButton {
  title: string
  onClick: MouseEventHandler
  className: string
}

export const Button: FC<propsButton> = ({ title, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>{title}</button>
  );
};

