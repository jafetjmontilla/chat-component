import React, { createContext, Dispatch, FC, useReducer, Reducer } from "react";


interface StateProps {
  contentWidth: number | undefined
  contentHeight: number | undefined
}

interface StateContextProps extends StateProps {
  dispatch: Dispatch<typeDispatch>
}

const StateContextInitialValues: StateContextProps = {
  contentWidth: 100,
  contentHeight: 200,
  dispatch: () => { }
}

export enum typeSet {
  contentWidth = "contentWidth",
  contentHeight = "contentHeight"
}

interface typeDispatch {
  set: typeSet
  value: any
}

const StateContext = createContext(StateContextInitialValues);

const StateProvider: FC = ({ children }): JSX.Element => {

  const [props, dispatch] = useReducer<Reducer<StateProps, typeDispatch>>((state, action) => {
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

