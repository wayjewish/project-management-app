import { AxiosInstance } from 'axios';
import instance from './instance';

export interface IPropsSignIn {
  login: string;
  password: string;
}

export interface IPropsSignUp {
  name: string;
  login: string;
  password: string;
}

class UsersService {
  instance: AxiosInstance;

  constructor() {
    this.instance = instance;
  }

  signin(data: IPropsSignIn) {
    return this.instance.post('/signin', data).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  signup(data: IPropsSignUp) {
    return this.instance.post('/signup', data).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
}

export default new UsersService();
