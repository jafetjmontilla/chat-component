import React, { createContext, Dispatch, FC, useReducer, Reducer, useEffect } from "react";

interface StateProps {
  contentWidth: number
  contentHeight: number
  topBarSizeX: number
  topBarSizeY: number
  SectionChatBoxX: number
  SectionInfoShow: boolean
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
  SectionInfoShow: false,
  dispatch: () => { }
}

export enum typeSetChatContext {
  contentWidth = "contentWidth",
  contentHeight = "contentHeight",
  topBarSizeX = "topBarSizeX",
  topBarSizeY = "topBarSizeY",
  SectionChatBoxX = "SectionChatBoxX",
  SectionInfoShow = "SectionInfoShow"
}

interface typeDispatch {
  set: typeSetChatContext
  value: any
}

const StateContext = createContext<Context>(InitialValues);

const StateProvider: FC = ({ children }): JSX.Element => {
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

