import { SET_CURRENT_USER } from "../actions/type";

const initialState = {
  isAuthenticated: false,
  user: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  if (action.type === SET_CURRENT_USER) {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload,
    };
  } else {
    return state;
  }
};
