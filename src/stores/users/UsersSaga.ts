import {put, delay} from 'redux-saga/effects';
import UsersAction from './UsersAction';

export default class UsersSaga {
  public static* loadDataSaga() {
    try {
      // yield delay(2000);
      const res = yield fetch('https://jsonplaceholder.typicode.com/users');
      const data = yield res.json();

      yield put(UsersAction.loadUsersFinished(data));
    } catch (err) {
      yield put(UsersAction.loadUsersFinished(err));
    }
  }
}
