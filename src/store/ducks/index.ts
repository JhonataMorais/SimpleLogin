import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { loginReducer as login, loginSaga } from './login';

export const rootReducer = () =>
  combineReducers({
    login,
  });

export function* rootSaga() {
  yield all([loginSaga()]);
}
