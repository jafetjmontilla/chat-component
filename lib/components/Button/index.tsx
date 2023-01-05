import React, { FC } from "react";
import "../../styles.css";

export interface ButtonProps extends Partial<HTMLButtonElement> {
  message: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<ButtonProps> = ({ message, onClick, className }) => {
  return (
    <button className={`p-3 bg-gradient-to-r from-red-100 to-red-400 rounded-md text-white ${className}`} onClick={onClick}>
      {message}
    </button>
  );
};
