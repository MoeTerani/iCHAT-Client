import {
  ADD_MESSAGE,
  ADD_USERS,
  CLEAR_CHAT,
  ActionTypes
} from '../../types';

export const addMessageAction = (message:any): ActionTypes => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const usersAction = (users:{ id: string, name:string }): ActionTypes => ({
  type: ADD_USERS,
  payload: users,
});

export const clearChatAction = (): ActionTypes => ({
  type: CLEAR_CHAT,
});
