import React, { FC } from "react";

interface propsMesageTetx {
  message: string;
  date: string;
  emisor?: boolean;
}

export const MessageText: FC<propsMesageTetx> = ({ message, date, emisor }) => (
  <>
    <div className="asd-grid asd-pb-1">
      {/* <div className="@md:max-w-lg"> */}
      <p className={`${emisor ? "asd-text-black " : "asd-text-black "} asd-break-all asd-pl-2 asd-pt-1 asd-pr-2 asd-text-xs @md:asd-text-sm`}>
        {message}
      </p>
      {/* </div> */}
      {/* <div className=" "> */}
      <p className={`${emisor ? "asd-pr-6" : "asd-pr-2"} asd-text-right asd-text-gray-500 asd-text-xs asd-pl-12 asd-w-22 asd-h-4`}>
        {date}
      </p>
      {/* </div> */}
    </div>
    <style >{`
    @media screen and (max-width: 767px){
        .maxWText {
          width: 230px;
          //overflow: scroll;
          font-size: 10px
        }
      } 
    `}</style>
  </>
);
