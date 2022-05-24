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
    return this.instance.get('/boards');
  }
  get({ id }: IPropsGetBoard) {
    return this.instance.get(`/boards/${id}`);
  }
  create({ data }: IPropsAddBoard) {
    return this.instance.post('/boards', data);
  }
  update({ id, data }: IPropsUpdateBoard) {
    return this.instance.put(`/boards/${id}`, data);
  }
  delete({ id }: IPropsDeleteBoard) {
    return this.instance.delete(`/boards/${id}`);
  }
}

export default new BoardsService();
