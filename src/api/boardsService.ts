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
    return this.instance.get('/boards').catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  get({ id }: IPropsGetBoard) {
    return this.instance.get(`/boards/${id}`).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  create({ data }: IPropsAddBoard) {
    return this.instance.post('/boards', data).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  update({ id, data }: IPropsUpdateBoard) {
    return this.instance.put(`/boards/${id}`, data).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  delete({ id }: IPropsDeleteBoard) {
    return this.instance.delete(`/boards/${id}`).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
}

export default new BoardsService();
