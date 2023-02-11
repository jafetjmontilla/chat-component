import React, { FC, memo } from "react";
import { CircleImage } from './CircleImage'


interface propsItem {
  image: any | undefined | null
  name: String
  info: any
  _id: String
  onLine?: boolean
}

export const Item: FC<propsItem> = memo(({ image, name, info, _id, onLine }) => {
  return (
    <div
      className="asd-flex  asd-items-center asd-justify-center asd-w-full asd-gap-2 asd-cursor-pointer asd-py-1"
    >
      <CircleImage image={image} name={name} onLine={onLine} />
      <span className="asd-w-full asd-truncate">
        <h3 className="asd-text-gray-700 asd-text-sm">{name}</h3>
        <p className="asd-font-regular asd-text-gray-500 asd-text-xs asd-w-full asd-truncate">{info}</p>
      </span>
    </div>
  );
});