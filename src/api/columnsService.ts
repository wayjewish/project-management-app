import { AxiosInstance } from 'axios';
import instance from './instance';
import { IColumnData } from './types';

class ColumnsService {
  instance: AxiosInstance;

  constructor() {
    this.instance = instance;
  }

  getAll(boardId: string) {
    return this.instance.get(`/boards/${boardId}/columns`);
  }
  get(boardId: string, id: string) {
    return this.instance.get(`/boards/${boardId}/columns/${id}`);
  }
  create(boardId: string, data: IColumnData) {
    return this.instance.post(`/boards/${boardId}/columns`, data);
  }
  update(boardId: string, id: string, data: IColumnData) {
    return this.instance.put(`/boards/${boardId}/columns/${id}`, data);
  }
  delete(boardId: string, id: string) {
    return this.instance.delete(`/boards/${boardId}/columns/${id}`);
  }
}

export default new ColumnsService();
