//SKIP BUTTON
export interface logInState {
  name: string;
  users: Array<object>;
  socket: any;
  isAuthenticated: boolean;
}
// chat state
export interface chatState {
  messages: Array<object>;
  users: Array<object>;
 
}

// LOG IN
export const LOG_IN = 'LOG_IN';
export interface logInAction {
  type: typeof LOG_IN;
  payload: any;
}

// LOG OUT
export const LOG_OUT = 'LOG_OUT';
export interface logOutAction {
  type: typeof LOG_OUT;
}

// Add message to messages 
export const ADD_MESSAGE = 'ADD_MESSAGE';
export interface addMessageAction {
  type: typeof ADD_MESSAGE;
  payload: any;
}

// Add user to users 
export const ADD_USERS = 'ADD_USERS';
export interface usersAction {
  type: typeof ADD_USERS;
  payload: any;
}
// clear chat state 
export const CLEAR_CHAT = 'CLEAR_CHAT';
export interface clearChatAction {
  type: typeof CLEAR_CHAT;
}

// ALERT
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export type ActionTypes =  logInAction | logOutAction | addMessageAction |usersAction | clearChatAction;


