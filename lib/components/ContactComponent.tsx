import React, { FC, MouseEventHandler, ReactNode } from "react";
import { Item } from './Item'


interface props {
  image: string
  name: string
  info: string | ReactNode
  _id: string
  onClick: MouseEventHandler
  onLine?: boolean
}
export const ContactComponent: FC<props> = ({ image, onClick, name, info, _id, onLine }) => {
  return (
    <>
      <div className="asd-w-full asd-gap-10 asd-pl-3"   >
        <button onClick={onClick} className="asd-w-full asd-text-left asd-flex">
          <Item image={image} name={name} info={info} _id={_id} onLine={onLine} />
        </button>
      </div>
    </>
  );
};

