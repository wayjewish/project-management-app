import axios, { AxiosRequestConfig } from 'axios';
import { IUserData } from './types';

export interface IPropsGetUser {
  id: string;
}

export interface IPropsUpdateUser {
  id: string;
  data: IUserData;
}

export interface IPropsDeleteUser {
  id: string;
}

class UsersService {
  token: string;
  config: AxiosRequestConfig;

  constructor() {
    this.token = '';
    this.config = {
      baseURL: 'https://desolate-crag-37445.herokuapp.com/',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
  }

  updateToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
      this.config = {
        ...this.config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }
  }

  getAll() {
    this.updateToken();
    return axios.get('/users', this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  get({ id }: IPropsGetUser) {
    this.updateToken();
    return axios.get(`/users/${id}`, this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  update({ id, data }: IPropsUpdateUser) {
    this.updateToken();
    return axios.put(`/users/${id}`, data, this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  delete({ id }: IPropsDeleteUser) {
    this.updateToken();
    return axios.delete(`/users/${id}`, this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
}

export default new UsersService();
