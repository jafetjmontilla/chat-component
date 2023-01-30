import React, { FC } from "react";


interface propsMessageFile {
  emisor: boolean;
}
export const MessageFile: FC<propsMessageFile> = ({ emisor }) => (
  <>
    <div className="asd-flex asd-gap-10 asd-w-full">
      <div className="asd-flex asd-gap-4">
        <div className="asd-file asd-w-10 asd-h-10" />
        <span className={emisor ? "asd-text-white" : "asd-text-gray-700"}>
          <p className="asd-text-sm ">FileImage.jpg</p>
          <p className="asd-text-xs">2 mb</p>
        </span>
      </div>
      <div className="asd-flex asd-gap-3 asd-items-center">
      </div>
    </div>
    <style >
      {`
          .file {
            background-image: url("/file.svg");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
        `}
    </style>
  </>
);
