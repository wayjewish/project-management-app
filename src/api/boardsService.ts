import { AxiosInstance } from 'axios';
import instance from './instance';
import { IBoardData } from './types';

class BoardsService {
  instance: AxiosInstance;

  constructor() {
    this.instance = instance;
  }

  getAll() {
    return this.instance.get('/boards');
  }
  get(id: string) {
    return this.instance.get(`/boards/${id}`);
  }
  create(data: IBoardData) {
    return this.instance.post('/boards', data);
  }
  update(id: string, data: IBoardData) {
    return this.instance.put(`/boards/${id}`, data);
  }
  delete(id: string) {
    return this.instance.delete(`/boards/${id}`);
  }
}

export default new BoardsService();
