import React, { FC } from "react";


interface propsBoxChat {
  active: boolean
}
export const ChatBoxIni: FC<propsBoxChat> = ({ active }) => {
  return (
    <>
      <div className={`bg-white  medium lg:flex col-span-12 lg:col-span-9 bg-base w-full h-full flex flex-col justify-between border-l-2 border-gray-100`}>
        <div className="text-center p-24">
          <p className="text-center">
            Bienvenido!!! Ahora puedes enviar y recibir mensajes
          </p>
        </div>
      </div>
      <style >{`
      @media screen and (max-width: 700px){
        .medium {
          display: none;
        }
      }       
      `}</style>
    </>
  );
};

