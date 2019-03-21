import { GET_USERS, GET_ALL_USERS } from "../actions/types";

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
    default:
      return state;
  }
}
