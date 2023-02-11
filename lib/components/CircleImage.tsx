import React, { FC } from "react";

interface propsCircleImage {
  image: any | undefined | null
  name: String
  onLine?: boolean
}

export const CircleImage: FC<propsCircleImage> = ({ image, name, onLine }) => (
  <>
    <span className="asd-relative">
      <div className="asd-relative asd-w-10 asd-h-10">
        {
          image ?
            <img src={image} alt={"avatar"} width={46} height={46} className="asd-rounded-full" />
            :
            <p className="asd-bg-white asd-rounded-full asd-w-10 asd-h-10 asd-p-2 asd-text-center">{name?.split(" ")[0]?.slice(0, 1)?.toUpperCase()}{name?.split(" ")[1]?.slice(0, 1)?.toUpperCase()}</p>
        }
      </div>
      {onLine && <svg className="asd-bg-green-500 asd-rounded-full asd-w-3 asd-h-3 asd-absolute asd-bottom-0 asd-right-0 asd-border asd-border-white" />}
    </span>
  </>
);

/* alt={name} */