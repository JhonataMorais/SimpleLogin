export type SagaAction<T> = Action<string> & {
  payload: T;
};

export type UserData = {
  id: number;
  name: string;
}

export type UserDataResponse = {
  user: UserData,
  token: string
}

export interface InitialState {
  success: boolean;
  data: UserDataResponse;
  fetching: boolean;
}

export type LoginData = {
  email: string;
  password: string;
}

export type DataResponse<T> = {
  data?: T;
  success?: boolean;
  fetching?: boolean;
};

export type LoginResponse = DataResponse<UserDataResponse>;
