import React, { FC, MouseEventHandler } from "react";
import { Item } from './Item'


interface propsContact {
  image: any
  name: String
  info: any
  _id: String
  onClick: MouseEventHandler
  onLine?: boolean

}



export const Contact: FC<propsContact> = ({ image, onClick, name, info, _id, onLine }) => {
  return (
    <>
      <div className="asd-w-full asd-gap-10 asd-pl-1"   >
        <button onClick={onClick} className="asd-w-full asd-text-left asd-flex">
          <Item image={image} name={name} info={info} _id={_id} onLine={onLine} />
        </button>

      </div>
    </>
  );
};

