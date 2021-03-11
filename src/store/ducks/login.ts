import { Reducer } from 'redux'
import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { InitialState, LoginData, LoginResponse, SagaAction } from '../../@types'
import AuthorizationService from '../../services/AuthorizationService'
import * as constants from '../constants/modules/loginConstants'
export type FetchloginAction = SagaAction<LoginData>

export type LoginState = InitialState & LoginResponse

const initialState: LoginState = {
  success: false,
  data: {
    user: {
      id: 0,
      name: '',
    },
    token: ''
  },
  fetching: false,
}

export const loginReducer: Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.LOGIN_POST:
      return { ...state, ...payload, fetching: true };
    case constants.LOGIN_POST_SUCCESS:
      return { ...state, ...payload };
    case constants.LOGIN_POST_ERROR:
      return { ...state, ...payload };
    default:
      return state;
  }
};

function* fetchLogin({ payload }: FetchloginAction) {
  try {
    const data = yield AuthorizationService.login(payload.login, payload.password)

    yield put({
      type: constants.LOGIN_POST_SUCCESS,
      payload: { success: true, fetching: false, data },
    });
  } catch (error) {
    yield put({
      type: constants.LOGIN_POST_ERROR,
      payload: { ...error, fetching: false, error: true },
    });
  }
}

export function* loginSaga() {
  yield takeLatest(constants.LOGIN_POST, fetchLogin);
}
