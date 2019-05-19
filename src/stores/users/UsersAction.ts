import UsersResponseModel from './models/users/UsersResponseModel';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import IAction from '../../models/IAction';

export type UsersActionUnion = void | UsersResponseModel;

export default class UsersAction {
  public static readonly REQUEST_USERS: string = 'UsersAction.REQUEST_USERS';
  public static readonly REQUEST_USERS_FINISHED: string = 'UsersAction.REQUEST_USERS_FINISHED';

  public static loadUsers(): IAction<void> {
    return {
      type: UsersAction.REQUEST_USERS,
    };
  }

  public static loadUsersFinished(model: UsersResponseModel | HttpErrorResponseModel): IAction<UsersResponseModel | HttpErrorResponseModel> {
    return {
      type: UsersAction.REQUEST_USERS_FINISHED,
      payload: model,
      error: model instanceof HttpErrorResponseModel,
    };
  }

}
