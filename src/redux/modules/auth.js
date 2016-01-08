const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: true,
        loaded: true,
        user: action.payload
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        user: null,
        loginError: action.payload
      };
    default:
      return state;
  }
}

export function loginSuccess(status) {
  return {
    type: LOGIN_SUCCESS,
    payload: { ...status }
  };
}

export function loginFail(status) {
  return {
    type: LOGIN_FAIL,
    payload: { ...status },
    error: true
  };
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}
