export const POST_LOGIN = 'POST_LOGIN';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_ERROR = 'POST_LOGIN_ERROR';

export const loginAction = payload => {
  return {
    type: POST_LOGIN,
    payload: payload,
  };
};

export const loginActionSuccess = payload => {
  return {
    type: POST_LOGIN_SUCCESS,
    payload: payload,
  };
};

export const loginActionError = payload => {
  return {
    type: POST_LOGIN_ERROR,
    payload: payload,
  };
};
