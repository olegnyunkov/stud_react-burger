import {ADD_USER, REMOVE_USER} from '../actions/user-actions'

const userInitialState = {
  success: false,
  user: {
    email: "",
    name: "",
  },
  accessToken: "",
  refreshToken: "",
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        success: true,
        user: {
          email: action.payload.user.email,
          name: action.payload.user.name,
        },
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    }
    case REMOVE_USER: {
        return {
          ...state,
          success: true,
          user: {
            email: action.user.email,
            name: action.user.name,
          },
          accessToken: action.accessToken,
          refreshToken: action.refreshToken,
        };
      }
      default: {
        return state
      }
  }
};
