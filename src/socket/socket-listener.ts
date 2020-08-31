import { logInAction, logOutAction } from "../state/actions/JoinAction";
import { addMessageAction, usersAction, clearChatAction } from "../state/actions/chat";
import { setAlert } from "../state/actions/alert-action";
import { REMOVE_ALL_ALERTS } from '../state/types';


export  const socketListener = (name:any, socket:any, dispatch:any) =>{

  socket.emit('join', { name: name }, () => {});

    
    socket.on('successful-connection', (name: string,avatar:string) => {
        dispatch(logInAction({ name: { name },socket:socket,avatar }))
      });
      socket.on('message', (msg: object) => {
        dispatch(addMessageAction(msg)) 
    });
    socket.on('activeUsers', (data: any) => {
        dispatch(usersAction(data.users)) 
      });
      socket.on('timeOut', (data: any) => {
        socket.emit('inActiveUser');
        // setConnected(false);
        dispatch(logOutAction())
        dispatch(clearChatAction())
        socket.close();
        dispatch({type: REMOVE_ALL_ALERTS})
      dispatch(setAlert('Disconnected due to inactivity', 'danger'));
      });
      socket.on('login_error', (data: any) => {
        socket.close();
        dispatch({type: REMOVE_ALL_ALERTS})
        const err = data.errorMessage
        dispatch(setAlert(err,'danger'))
  
      });
      // if server is not available
      socket.on('connect_error', () => {
        dispatch(logOutAction())
        dispatch(clearChatAction())
        socket.close();
        dispatch({type: REMOVE_ALL_ALERTS})
        dispatch(setAlert('Server is not available','danger'));
      });

      // if server initiate the disconnection
      socket.on('disconnect', (reason:any) => {
        dispatch(logOutAction())
        dispatch(clearChatAction())
        socket.close();
        dispatch({type: REMOVE_ALL_ALERTS})
          dispatch(setAlert('Server is disconnected','danger'));
      });

    }
