/*
  // Returned Api Data Sample
  {
    "data": {},
    "success": true,
    "errors": []
  }
 */
export default interface IResponseData<T> {
  data: T;
  success: boolean;
  errors: string[];
}
