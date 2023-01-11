import React, { FC } from "react";

interface propsMesageTetx {
  message: string;
  date: string;
  emisor?: boolean;
}

export const MessageText: FC<propsMesageTetx> = ({ message, date, emisor }) => (
  <>
    <div className="grid pb-1">
      {/* <div className="@md:max-w-lg"> */}
      <p className={`${emisor ? "text-black " : "text-black "} break-all pl-2 pt-1 pr-2 text-xs @md:text-sm`}>
        {message}
      </p>
      {/* </div> */}
      {/* <div className=" "> */}
      <p className={`${emisor ? "pr-6" : "pr-2"} text-right text-gray-500 text-xs pl-12 w-22 h-4`}>
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
