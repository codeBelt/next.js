import {combineReducers, Reducer, ReducersMapObject} from 'redux';
// import { History } from 'history';
import IStore from '../models/IStore';
import UsersReducer from './users/UsersReducer';

export default (history: any): Reducer<IStore> => {
  const reducerMap: ReducersMapObject<IStore> = {
    users: UsersReducer.reducer,
  };

  return combineReducers(reducerMap);
};
