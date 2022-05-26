import { AxiosInstance } from 'axios';
import instance from './instance';
import { IBoardData } from './types';

export interface IPropsGetBoard {
  id: string;
}

export interface IPropsAddBoard {
  data: IBoardData;
}

export interface IPropsUpdateBoard {
  id: string;
  data: IBoardData;
}

export interface IPropsDeleteBoard {
  id: string;
}

class BoardsService {
  instance: AxiosInstance;

  constructor() {
    this.instance = instance;
  }

  getAll() {
    return this.instance.get('/boards').catch((error) => error.response);
  }
  get({ id }: IPropsGetBoard) {
    return this.instance.get(`/boards/${id}`).catch((error) => error.response);
  }
  create({ data }: IPropsAddBoard) {
    return this.instance.post('/boards', data).catch((error) => error.response);
  }
  update({ id, data }: IPropsUpdateBoard) {
    return this.instance.put(`/boards/${id}`, data).catch((error) => error.response);
  }
  delete({ id }: IPropsDeleteBoard) {
    return this.instance.delete(`/boards/${id}`).catch((error) => error.response);
  }
}

export default new BoardsService();
