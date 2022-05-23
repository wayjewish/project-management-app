import { AxiosInstance } from 'axios';
import instance from './instance';
import { IUserData } from './types';

class UsersService {
  instance: AxiosInstance;

  constructor() {
    this.instance = instance;
  }

  getAll() {
    return this.instance.get('/users');
  }
  get(id: string) {
    return this.instance.get(`/users/${id}`);
  }
  update(id: string, data: IUserData) {
    return this.instance.put(`/users/${id}`, data);
  }
  delete(id: string) {
    return this.instance.delete(`/users/${id}`);
  }
}

export default new UsersService();
