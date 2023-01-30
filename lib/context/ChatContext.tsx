import React, { createContext, Dispatch, FC, useReducer, Reducer, useEffect, HtmlHTMLAttributes, ReactNode } from "react";

interface StateProps {
  contentWidth: number
  contentHeight: number
  topBarSizeX: number
  topBarSizeY: number
  SectionChatBoxX: number
  SectionChatShow: boolean
  SectionInfoX: number
  SectionInfoShow: boolean
  activeSearch: boolean

}

interface Context extends StateProps {
  dispatch: Dispatch<typeDispatch>
}

const InitialValues: Context = {
  contentWidth: 0,
  contentHeight: 0,
  topBarSizeX: 0,
  topBarSizeY: 0,
  SectionChatBoxX: 0,
  SectionChatShow: false,
  SectionInfoX: 260,
  SectionInfoShow: false,
  activeSearch: false,
  dispatch: () => { }
}

export enum typeSetChatContext {
  contentWidth = "contentWidth",
  contentHeight = "contentHeight",
  topBarSizeX = "topBarSizeX",
  topBarSizeY = "topBarSizeY",
  SectionChatBoxX = "SectionChatBoxX",
  SectionChatShow = "SectionChatShow",
  SectionInfoX = "SectionInfoX",
  SectionInfoShow = "SectionInfoShow",
  activeSearch = "activeSearch"
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

