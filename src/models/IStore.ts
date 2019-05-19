import IUsersState from '../stores/users/models/IUsersState';

export default interface IStore {
  readonly users: IUsersState;
}
