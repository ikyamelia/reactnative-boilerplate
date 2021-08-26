import {POST_LOGIN, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR} from './action';

const initialState = {
  isLogin: false,
  isLoading: false,
  data: {},
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN:
      return {
        ...state,
        isLogin: false,
        isLoading: true,
      };

    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        data: action.payload,
      };

    case POST_LOGIN_ERROR:
      return {
        ...state,
        isLogin: false,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default LoginReducer;
