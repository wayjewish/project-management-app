import axios, { AxiosInstance } from 'axios';
import { api } from './api';
import { IBoardData } from '../types';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Yzc2NmRmMi05MzE3LTQ3ODQtOGRlZC1iODQ3NDQyMjk2NmEiLCJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjUzMjQzMjAzfQ.Ip2v4eZdHfYqe7u_h0Syi3M1CKHIZuPbYGOJG6TA70g';

class BoardsService {
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

  getAll() {
    return this.instance.get(this.endpoint);
  }
  get(id: string) {
    return this.instance.get(`${this.endpoint}/${id}`);
  }
  create(data: IBoardData) {
    return this.instance.post(this.endpoint, data);
  }
  update(id: string, data: IBoardData) {
    return this.instance.put(`${this.endpoint}/${id}`, data);
  }
  delete(id: string) {
    return this.instance.delete(`${this.endpoint}/${id}`);
  }
}

export default new BoardsService();
