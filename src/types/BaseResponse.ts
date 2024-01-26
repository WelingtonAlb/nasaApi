export interface BaseResponse<T> {
  data: T;
  errors: Errors[];
}

type Errors = {
  message: string;
  stackTrace: string;
};
