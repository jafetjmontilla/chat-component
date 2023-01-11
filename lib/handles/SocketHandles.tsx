import { Dispatch } from "react";
import { Socket } from "socket.io-client";
import { typeDispatchSocket } from "../context";

interface handleConectSocketPros {
  token: string
  socket: Socket
  dispatch: Dispatch<typeDispatchSocket>
}

export const handleConectSocket = ({ token, socket, dispatch }: handleConectSocketPros) => {
  // if (token && !socket?.connected) {
  //   //setSocket(api.socketIO({ token }));
  // }
  // if (token && !socketApp?.connected) {
  //   //setSocketApp(api.socketIOApp({ token }));
  // }
  // if (!token && socket) {
  //   //socket.disconnect();
  // }
  // if (!token && socketApp) {
  //   //socketApp.disconnect();
  // }
}