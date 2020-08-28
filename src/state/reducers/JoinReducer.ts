import { joinState, ActionTypes, JOIN_DATA } from '../types';

const initialState: joinState = {
  name: '',
  users: []
};
export default (state = initialState, action: ActionTypes): joinState => {
  switch (action.type) {
    case JOIN_DATA:
      return { ...state, name: action.payload.name, users: action.payload.users };

    default:
      return state;
  }
};
