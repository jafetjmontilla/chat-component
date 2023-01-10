import React, { createContext, FC, useState, useEffect, useContext, Dispatch, useReducer } from "react";
import { Socket } from "socket.io-client";


interface StateProps {
  socket: Socket | null
  socketApp: Socket | null
}

interface Context extends StateProps {
  dispatch: Dispatch<typeDispatch>
}

const InitialValues: Context = {
  socket: null,
  socketApp: null,
  dispatch: () => { }
}

export enum typeSetSocketContext {
  socket = "socket",
  socketApp = "socketApp",
}

interface typeDispatch {
  set: typeSetSocketContext
  value: any
}

const StateContext = createContext<Context>(InitialValues);

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

export { StateContext as StateSocketContext, StateProvider as StateSocketProvider };
