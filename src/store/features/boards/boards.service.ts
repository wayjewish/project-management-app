import axios, { AxiosInstance } from 'axios';
import { api } from '../../api';
import { IBoardData } from '../../../types';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5OWQzMTczMy03NTE0LTQ0MzQtYTNjZC0xZjUxMTIyOTMyZWMiLCJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjUzMDYwMDk3fQ.vzS0nBjU0jbODVxpzj0Ka3KSLGs7OXw94yEDwscYZkQ';

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
