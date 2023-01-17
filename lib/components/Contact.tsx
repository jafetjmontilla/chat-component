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
      <div className="w-full gap-10 pl-2 pr-2 pt-2"   >
        <button onClick={onClick} className="w-full text-left flex">
          <Item image={image} name={name} info={info} _id={_id} onLine={onLine} />
        </button>

      </div>
    </>
  );
};

