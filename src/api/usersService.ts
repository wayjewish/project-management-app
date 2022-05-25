import { AxiosInstance } from 'axios';
import instance from './instance';
import { IUserData } from './types';

class UsersService {
  instance: AxiosInstance;

  constructor() {
    this.instance = instance;
  }

  getAll() {
    return this.instance.get('/users').catch((error) => error.response);
  }
  get(id: string) {
    return this.instance.get(`/users/${id}`).catch((error) => error.response);
  }
  update(id: string, data: IUserData) {
    return this.instance.put(`/users/${id}`, data).catch((error) => error.response);
  }
  delete(id: string) {
    return this.instance.delete(`/users/${id}`).catch((error) => error.response);
  }
}

export default new UsersService();
