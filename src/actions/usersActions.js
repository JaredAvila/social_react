import { GET_USERS, GET_ALL_USERS } from "./types";

export const getUsers = () => dispatch => {
  dispatch({
    type: GET_ALL_USERS
  });
};
export const getAllUsers = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users =>
      dispatch({
        type: GET_USERS,
        payload: users
      })
    );
};
