import React, { FC } from "react";
import "../../styles.css";

export interface ButtonBlueProps extends Partial<HTMLButtonElement> {
  message: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const ButtonBlue: FC<ButtonBlueProps> = ({ message, onClick, className }) => {
  return (
    <button className={`p-3 bg-gradient-to-r from-blue-100 to-blue-400 rounded-md text-white ${className}`} onClick={onClick}>
      {message}
    </button>
  );
};
