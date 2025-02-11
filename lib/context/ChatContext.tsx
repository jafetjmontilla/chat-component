import React, { createContext, Dispatch, FC, useReducer, Reducer, useEffect, HtmlHTMLAttributes, ReactNode } from "react";
import { Chat, ResultChats, ResultContacts, ResultEvents, SendMessage, ThemeChat } from "../components/App.types";

interface StateProps {
  provider: any
  contentWidth: number
  contentHeight: number
  topBarSizeX: number
  topBarSizeY: number
  SectionChatBoxX: number
  SectionChatShow: boolean
  SectionInfoX: number
  SectionInfoShow: boolean
  activeSearch: boolean
  chats: ResultChats | undefined
  contacts: ResultContacts
  events: ResultEvents
  chat: Chat | null
  userUid: string
  sendMessage: Dispatch<SendMessage>
  getScraperMetaData: Dispatch<any>
  resultSearchChat: ResultChats | undefined
  theme: ThemeChat
}

interface Context extends StateProps {
  dispatch: Dispatch<typeDispatch>
}

const InitialValues: Context = {
  provider: undefined,
  contentWidth: 0,
  contentHeight: 0,
  topBarSizeX: 0,
  topBarSizeY: 0,
  SectionChatBoxX: 0,
  SectionChatShow: false,
  SectionInfoX: 360,
  SectionInfoShow: false,
  activeSearch: false,
  dispatch: () => { },
  chats: undefined,
  contacts: { results: [], total: 0 },
  events: { results: [], total: 0 },
  chat: null,
  userUid: "",
  sendMessage: () => { },
  getScraperMetaData: () => { },
  resultSearchChat: undefined,
  theme: { baseColor: "", primaryColor: "", secondaryColor: "", tertiaryColor: "" }
}

export enum typeSetChatContext {
  provider = "provider",
  contentWidth = "contentWidth",
  contentHeight = "contentHeight",
  topBarSizeX = "topBarSizeX",
  topBarSizeY = "topBarSizeY",
  SectionChatBoxX = "SectionChatBoxX",
  SectionChatShow = "SectionChatShow",
  SectionInfoX = "SectionInfoX",
  SectionInfoShow = "SectionInfoShow",
  activeSearch = "activeSearch",
  chats = "chats",
  contacts = "contacts",
  events = "events",
  chat = "chat",
  userUid = "userUid",
  sendMessage = "sendMessage",
  resultSearchChat = "resultSearchChat",
  getScraperMetaData = "getScraperMetaData",
  theme = "theme"
}

interface typeDispatch {
  set: typeSetChatContext
  value: any
}

const StateContext = createContext<Context>(InitialValues);

const StateProvider: FC<{ children: ReactNode }> = ({ children }): JSX.Element => {
  const [props, dispatch] = useReducer((state: StateProps, action: typeDispatch) => {
    // if ((typeof action.set !== "undefined" || "null") && (typeof action.value !== "undefined" || "null")) {
    state = { ...state, [`${action.set}`]: action.value }
    // }
    return state
  }, InitialValues)

  return (
    <StateContext.Provider value={{ ...props, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext as StateChatContext, StateProvider as StateChatProvider };

