import axios, { AxiosInstance } from 'axios';
import { api } from './api';
import { IColumnData } from '../types';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Yzc2NmRmMi05MzE3LTQ3ODQtOGRlZC1iODQ3NDQyMjk2NmEiLCJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjUzMjQzMjAzfQ.Ip2v4eZdHfYqe7u_h0Syi3M1CKHIZuPbYGOJG6TA70g';

class ColumnsService {
  endpoint: string;
  instance: AxiosInstance;

  constructor() {
    this.endpoint = '/boards';
    this.instance = axios.create({
      baseURL: api.url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getAll(boardId: string, columnId: string) {
    return this.instance.get(`${this.endpoint}/${boardId}/columns/${columnId}/tasks`);
  }
  get(boardId: string, columnId: string, id: string) {
    return this.instance.get(`${this.endpoint}/${boardId}/columns/${columnId}/tasks/${id}`);
  }
  create(boardId: string, columnId: string, data: IColumnData) {
    return this.instance.post(`${this.endpoint}/${boardId}/columns/${columnId}/tasks`, data);
  }
  update(boardId: string, columnId: string, id: string, data: IColumnData) {
    return this.instance.put(`${this.endpoint}/${boardId}/columns/${columnId}/tasks/${id}`, data);
  }
  delete(boardId: string, columnId: string, id: string) {
    return this.instance.delete(`${this.endpoint}/${boardId}/columns/${columnId}/tasks/${id}`);
  }
}

export default new ColumnsService();
