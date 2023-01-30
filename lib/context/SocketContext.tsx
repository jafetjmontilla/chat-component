import React, { createContext, FC, useState, useEffect, useContext, Dispatch, useReducer, ReactNode } from "react";
import { Socket } from "socket.io-client";


interface StateProps {
  socket: Socket | null
  socketApp: Socket | null
}

interface Context extends StateProps {
  dispatch: Dispatch<typeDispatchSocket>
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

export interface typeDispatchSocket {
  set: typeSetSocketContext
  value: any
}

const StateContext = createContext<Context>(InitialValues);

const StateProvider: FC<{ children: ReactNode }> = ({ children }): JSX.Element => {
  const [props, dispatch] = useReducer((state: StateProps, action: typeDispatchSocket) => {
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
