import { AxiosInstance } from 'axios';
import instance from './instance';
import { IColumnData } from './types';

class TasksService {
  instance: AxiosInstance;

  constructor() {
    this.instance = instance;
  }

  getAll(boardId: string, columnId: string) {
    return this.instance.get(`/boards/${boardId}/columns/${columnId}/tasks`);
  }
  get(boardId: string, columnId: string, id: string) {
    return this.instance.get(`/boards/${boardId}/columns/${columnId}/tasks/${id}`);
  }
  create(boardId: string, columnId: string, data: IColumnData) {
    return this.instance.post(`/boards/${boardId}/columns/${columnId}/tasks`, data);
  }
  update(boardId: string, columnId: string, id: string, data: IColumnData) {
    return this.instance.put(`/boards/${boardId}/columns/${columnId}/tasks/${id}`, data);
  }
  delete(boardId: string, columnId: string, id: string) {
    return this.instance.delete(`/boards/${boardId}/columns/${columnId}/tasks/${id}`);
  }
}

export default new TasksService();
