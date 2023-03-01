import React, { FC, MouseEventHandler, ReactNode, useEffect } from "react";
import { Item } from './Item'


interface propsContact {
  image: string
  name: string
  info: string | ReactNode
  _id: string
  onClick: MouseEventHandler
  onLine?: boolean
}
export const Contact: FC<propsContact> = ({ image, onClick, name, info, _id, onLine }) => {
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

