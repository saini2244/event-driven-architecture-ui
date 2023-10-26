import { ADD_USER } from "./actionTypes";

const initialState = {
  users: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};