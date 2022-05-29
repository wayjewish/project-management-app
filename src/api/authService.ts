import axios, { AxiosRequestConfig } from 'axios';

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
  config: AxiosRequestConfig;

  constructor() {
    this.config = {
      baseURL: 'https://desolate-crag-37445.herokuapp.com/',
    };
  }

  signin(data: IPropsSignIn) {
    return axios.post('/signin', data, this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  signup(data: IPropsSignUp) {
    return axios.post('/signup', data, this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
}

export default new UsersService();
