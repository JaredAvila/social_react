import { GET_USERS, GET_ALL_USERS, ADD_USER } from "../actions/types";

const initialState = {
  users: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case GET_ALL_USERS:
      return {
        ...state
      };
    case ADD_USER:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
}
