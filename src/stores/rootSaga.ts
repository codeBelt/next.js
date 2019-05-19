import 'isomorphic-unfetch';
import {all, ForkEffect, takeLatest} from 'redux-saga/effects';
import UsersSaga from './users/UsersSaga';
import UsersAction from './users/UsersAction';

export default function* rootSaga() {
  const filteredSagas: ForkEffect[] = [
    takeLatest(UsersAction.REQUEST_USERS, UsersSaga.loadDataSaga),
  ];

  yield all(filteredSagas);
}
