import React, { Dispatch, FC, SetStateAction, useContext, useEffect, useState } from "react";
import { StateChatContext, typeSetChatContext } from "../context";
import { ArrowLeft, Close, SearchIcon } from "../icons";
import { ContainerIcon } from "./ContainerIcon";

interface propsSearchChat {
  handleSearchChat: Dispatch<any>
}

export const SearchChat: FC<propsSearchChat> = ({ handleSearchChat, }) => {
  const { activeSearch, dispatch } = useContext(StateChatContext);
  const [value, setValue] = useState("");

  const handleChange = async (e: any) => {
    setValue(e.target.value);
    const resultSearchChat = await handleSearchChat(e.target.value)
    dispatch({ set: typeSetChatContext.resultSearchChat, value: resultSearchChat })
  };
  const handleClearSearch = async (e: any) => {
    setValue("");
    dispatch({ set: typeSetChatContext.resultSearchChat, value: null })
  };
  // useEffect(() => {
  // }, [value])


  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    activeSearch ? setValue("") : document.getElementById("search")?.focus()
    setTimeout(() => {
      dispatch({ set: typeSetChatContext.activeSearch, value: !activeSearch })
      dispatch({ set: typeSetChatContext.resultSearchChat, value: null })
    }, 100);
  }

  return (
    <>
      <div className="asd-h-10 asd-flex asd-w-full asd-pl-2 asd-pr-2 asd-items-center asd-justify-start">
        <div className="asd-bg-white asd-flex asd-items-center asd-justify-start asd-w-full asd-rounded-full @md:asd-w-[306px]">
          <ContainerIcon onClick={handleClick} className="asd-w-8">
            {!activeSearch ? <SearchIcon className="asd-w-4 asd-h-4" /> : <ArrowLeft className="asd-w-6 asd-h-6" />}
          </ContainerIcon>
          <input
            id="search"
            placeholder="Buscar chat"
            value={value}
            onChange={handleChange}
            onFocus={() => { dispatch({ set: typeSetChatContext.activeSearch, value: true }) }}
            autoComplete="off"
            className="asd-w-[80%] asd-h-8 asd-pl-2 asd-text-sm asd-rounded-md asd-border-b asd-border-color-base focus:asd-outline-none"
          />
          {value !== "" && <ContainerIcon className="asd-pl-2 asd-pr-2" onClick={handleClearSearch}>
            <Close className="asd-w-5 asd-h-5" />
          </ContainerIcon>}
        </div>
      </div>
    </>
  );
};