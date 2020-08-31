import io from 'socket.io-client';
import { logOutAction } from '../state/actions/JoinAction';
import { socketListener } from './socket-listener';
import { clearChatAction } from '../state/actions/chat';

const ENDPOINT = 'https://ichat-server-heroku.herokuapp.com/';

export const connectSocketListener = (name:string,dispatch:any) => {
    const socket = io(ENDPOINT, {
        reconnection: false,
      });
  socketListener(name, socket, dispatch);
};

export const disconnect = (socket:any) => (dispatch:any) => {
    socket.emit('disconnect');
      socket.off();
      dispatch(logOutAction())
      dispatch(clearChatAction())
};