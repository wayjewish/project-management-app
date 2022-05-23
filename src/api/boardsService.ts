import axios, { AxiosInstance } from 'axios';
import { api } from './api';
import { IBoardData } from '../types';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Yzc2NmRmMi05MzE3LTQ3ODQtOGRlZC1iODQ3NDQyMjk2NmEiLCJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjUzMjQzMjAzfQ.Ip2v4eZdHfYqe7u_h0Syi3M1CKHIZuPbYGOJG6TA70g';

class BoardsService {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: api.url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
