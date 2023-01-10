import React, { createContext, Dispatch, FC, useReducer, Reducer } from "react";

interface StateProps {
  contentWidth: number
  contentHeight: number
  topBarSizeX: number
  topBarSizeY: number
}

interface Context extends StateProps {
  dispatch: Dispatch<typeDispatch>
}

const InitialValues: Context = {
  contentWidth: 0,
  contentHeight: 0,
  topBarSizeX: 0,
  topBarSizeY: 0,
  dispatch: () => { }
}

export enum typeSetChatContext {
  contentWidth = "contentWidth",
  contentHeight = "contentHeight",
  topBarSizeX = "topBarSizeX",
  topBarSizeY = "topBarSizeY",
}

interface typeDispatch {
  set: typeSetChatContext
  value: any
}

const StateContext = createContext(InitialValues);

const StateProvider: FC = ({ children }): JSX.Element => {
  const [props, dispatch] = useReducer((state: StateProps, action: typeDispatch) => {
    if (action.set && action.value) {
      state = { ...state, [`${action.set}`]: action.value }
    }
    return state
  }, InitialValues);

  return (
    <StateContext.Provider value={{ ...props, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext as StateChatContext, StateProvider as StateChatProvider };

