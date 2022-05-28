import { AxiosInstance } from 'axios';
import instance from './instance';
import { IUserData } from './types';

class UsersService {
  instance: AxiosInstance;

  constructor() {
    this.instance = instance;
  }

  getAll() {
    return this.instance.get('/users').catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  get(id: string) {
    return this.instance.get(`/users/${id}`).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  update(id: string, data: IUserData) {
    return this.instance.put(`/users/${id}`, data).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  delete(id: string) {
    return this.instance.delete(`/users/${id}`).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
}

export default new UsersService();
