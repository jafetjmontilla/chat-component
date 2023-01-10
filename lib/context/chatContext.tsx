import React, { createContext, Dispatch, FC, useReducer, Reducer } from "react";


interface StateProps {
  contentWidth: number
  contentHeight: number
  topBarSizeX: number
  topBarSizeY: number
}

interface StateContextProps extends StateProps {
  dispatch: Dispatch<typeDispatch>
}

const StateContextInitialValues: StateContextProps = {
  contentWidth: 0,
  contentHeight: 0,
  topBarSizeX: 0,
  topBarSizeY: 0,
  dispatch: () => { }
}

export enum typeSet {
  contentWidth = "contentWidth",
  contentHeight = "contentHeight",
  topBarSizeX = "topBarSizeX",
  topBarSizeY = "topBarSizeY",
}

interface typeDispatch {
  set: typeSet
  value: any
}

const StateContext = createContext(StateContextInitialValues);

const StateProvider: FC = ({ children }): JSX.Element => {
  const [props, dispatch] = useReducer((state: StateProps, action: typeDispatch) => {
    if (action.set && action.value) {
      console.log(333, action.set)
      state = { ...state, [`${action.set}`]: action.value }
    }
    return state
  }, StateContextInitialValues);

  return (
    <StateContext.Provider value={{ ...props, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };

