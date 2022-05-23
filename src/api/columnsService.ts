import axios, { AxiosInstance } from 'axios';
import { api } from './api';
import { IColumnData } from '../types';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Yzc2NmRmMi05MzE3LTQ3ODQtOGRlZC1iODQ3NDQyMjk2NmEiLCJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjUzMjQzMjAzfQ.Ip2v4eZdHfYqe7u_h0Syi3M1CKHIZuPbYGOJG6TA70g';

class ColumnsService {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: api.url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
