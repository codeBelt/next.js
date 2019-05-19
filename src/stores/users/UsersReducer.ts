import IUsersState from './models/IUsersState';
import UsersAction, {UsersActionUnion} from './UsersAction';
import IAction from '../../models/IAction';

export default class UsersReducer {
  public static readonly initialState: IUsersState = {
    users: [],
  };

  public static reducer(state: IUsersState = UsersReducer.initialState, action: IAction<UsersActionUnion>): IUsersState {
    if (action.error) {
      return state;
    }

    switch (action.type) {
      case UsersAction.REQUEST_USERS_FINISHED:
        return {
          ...state,
          users: action.payload as any,
        };
      default:
        return state;
    }
  }
}
