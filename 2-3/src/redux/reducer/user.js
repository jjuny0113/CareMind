import produce from "immer";

export const initialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  getUserInfoLoading: false,
  getUserInfoDone: false,
  getUserInfoError: null,
  token: null,
  userInfo: null,
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAILURE = "GET_USER_INFO_FAILURE";

export const LOG_OUT = "LOU_OUT";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.token = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case GET_USER_INFO_REQUEST:
        draft.getUserInfoLoading = true;
        draft.getUserInfoDone = false;
        draft.getUserInfoError = null;
        break;
      case GET_USER_INFO_SUCCESS:
        draft.getUserInfoLoading = false;
        draft.getUserInfoDone = true;
        draft.userInfo = action.data;
        break;
      case GET_USER_INFO_FAILURE:
        draft.getUserInfoLoading = false;
        draft.getUserInfoError = true;
        break;
      case LOG_OUT:
        draft.userInfo = null;
        draft.token = null;
      default:
        break;
    }
  });
};

export default reducer;
