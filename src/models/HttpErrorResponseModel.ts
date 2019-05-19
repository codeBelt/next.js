import uuid from 'uuid/v4';

export default class HttpErrorResponseModel {
  public readonly id: string = uuid();
  public status: number;
  public message: string;
  public errors: string[] = [];
  public url: string;
  public raw: any;
}
