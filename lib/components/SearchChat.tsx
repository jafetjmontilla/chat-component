import React, { Dispatch, FC, SetStateAction, useContext, useEffect, useState } from "react";
import { StateChatContext, typeSetChatContext } from "../context";
import { ArrowLeft, SearchIcon } from "../icons";

interface propsSearchChat {
  onChange: Dispatch<any>
}

export const SearchChat: FC<propsSearchChat> = ({ onChange, }) => {
  const { activeSearch, dispatch } = useContext(StateChatContext);
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    activeSearch ? setValue("") : document.getElementById("search")?.focus()
    setTimeout(() => {
      dispatch({ set: typeSetChatContext.activeSearch, value: false })
    }, 100);
  }

  return (
    <>
      <div className="asd-h-10 asd-grid asd-grid-cols-8 asd-content-center asd-pl-2 asd-pr-2">
        <div
          className="asd-bg-white asd-flex asd-justify-center asd-items-center asd-cursor-pointer"
          onClick={handleClick}
        >
          {!activeSearch ? <SearchIcon className="asd-w-4 asd-h-4" /> : <ArrowLeft className="asd-w-6 asd-h-6" />}
        </div>
        <div className="asd-bg-white asd-col-span-7">
          <input
            id="search"
            placeholder="Buscar chat"
            value={value}
            onChange={handleChange}
            onFocus={() => { dispatch({ set: typeSetChatContext.activeSearch, value: true }) }}
            autoComplete="off"
            className="asd-w-full asd-h-8 asd-pl-2 asd-text-sm asd-rounded-md asd-focus:outline-none asd-border-b asd-border-color-base focus:asd-outline-none "
          />
        </div>
      </div>
    </>
  );
};