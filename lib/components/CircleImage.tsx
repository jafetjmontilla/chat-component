import React, { FC } from "react";

interface propsCircleImage {
  image: any | undefined | null
  name: string
  onLine?: boolean
  classNameOnlySize?: string
}

export const CircleImage: FC<propsCircleImage> = ({ image, name, onLine, classNameOnlySize = "asd-w-10 asd-h-10" }) => (
  <>
    <span className="asd-relative">
      <div className={`asd-flex asd-relative asd-items-center asd-justify-center ${classNameOnlySize}`}>
        {
          image ?
            <img src={image} alt={"avatar"} className={`asd-border-2 asd-rounded-full ${classNameOnlySize}`} />
            :
            <p className={`asd-bg-white asd-rounded-full asd-text-center ${classNameOnlySize}`}>{name?.split(" ")[0]?.slice(0, 1)?.toUpperCase()}{name?.split(" ")[1]?.slice(0, 1)?.toUpperCase()}</p>
        }
      </div>
      {onLine && <svg className="asd-bg-green-500 asd-rounded-full asd-w-3 asd-h-3 asd-absolute asd-bottom-0 asd-right-0 asd-border asd-border-white" />}
    </span>
  </>
);

/* alt={name} */