import {AxiosResponse} from 'axios';
import environment from 'environment';
import UsersResponseModel from './models/users/UsersResponseModel';

export default class UsersEffect {
  private static _http = new HttpUtility();

  public static async loadUsers(): Promise<UsersResponseModel | HttpErrorResponseModel> {
    const endpoint: string = environment.api.users;
    const response: AxiosResponse | HttpErrorResponseModel = await UsersEffect._http.get(endpoint);

    if (response instanceof HttpErrorResponseModel) {
      return response;
    }

    return new UsersResponseModel(response.data);
  }
}
