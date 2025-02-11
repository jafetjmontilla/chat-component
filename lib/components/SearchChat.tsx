import React, { ChangeEvent, Dispatch, FC, SetStateAction, useContext, useEffect, useState } from "react";
import { StateChatContext, typeSetChatContext } from "../context";
import { ArrowLeft, Close, SearchIcon } from "../icons";
import { ContainerIcon } from "./ContainerIcon";

interface pros {
  title: string
}

export const SearchChat: FC<pros> = ({ title }) => {
  const { chats, activeSearch, dispatch } = useContext(StateChatContext);
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const resultFiltered = chats?.results?.filter(element => {
      return element?.title?.toLowerCase()?.includes(e.target.value?.toLowerCase()
      )
    })
    const resp = {
      results: resultFiltered,
      total: resultFiltered?.length
    }
    dispatch({ set: typeSetChatContext.resultSearchChat, value: resp })
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
      <div className="asd-h-10 asd-flex asd-w-full @md:asd-w-[340px] @md:asd-pl-2 @md:asd-pr-2 asd-pl-4 asd-pr-4 asd-py-5 @md:asd-pt-2 @md:asd-pb-2.5 asd-items-center asd-justify-center">
        <div className="asd-bg-white asd-flex asd-items-center asd-justify-start asd-w-full asd-rounded-full @md:asd-w-[316px]">
          <ContainerIcon onClick={handleClick} className="asd-w-8">
            {!activeSearch ? <SearchIcon className="asd-w-4 asd-h-4" /> : <ArrowLeft className="asd-w-6 asd-h-6" />}
          </ContainerIcon>
          <input
            id="search"
            placeholder={`buscar...`}
            value={value}
            onChange={handleChange}
            onFocus={() => { dispatch({ set: typeSetChatContext.activeSearch, value: true }) }}
            autoComplete="off"
            className={`asd-w-[80%] asd-h-8 asd-pl-2 asd-text-sm asd-rounded-md asd-border-b asd-border-color-base focus:asd-outline-none text-xs !asd-text-gray-700 mi-input`}
          />
          {value !== "" && <ContainerIcon className="asd-pl-2 asd-pr-2" onClick={handleClearSearch}>
            <Close className="asd-w-5 asd-h-5" />
          </ContainerIcon>}
        </div>
      </div>
      <style>{`
      .mi-input::placeholder {
        color: #d1d5db;
      }
      `}</style>
    </>
  );
};