import { joinState, ActionTypes, JOIN_DATA } from '../types';

const initialState: joinState = {
  name: '',
  room: '',
};
export default (state = initialState, action: ActionTypes): joinState => {
  switch (action.type) {
    case JOIN_DATA:
      return { ...state, name: action.payload.name, room: action.payload.room };

    default:
      return state;
  }
};
