import axios, { AxiosRequestConfig } from 'axios';
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
  token: string;
  config: AxiosRequestConfig;

  constructor() {
    this.token = '';
    this.config = {
      baseURL: 'https://desolate-crag-37445.herokuapp.com/',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
  }

  updateToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
      this.config = {
        ...this.config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }
  }

  getAll() {
    this.updateToken();
    return axios.get('/boards', this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  get({ id }: IPropsGetBoard) {
    this.updateToken();
    return axios.get(`/boards/${id}`, this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  create({ data }: IPropsAddBoard) {
    this.updateToken();
    return axios.post('/boards', data, this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  update({ id, data }: IPropsUpdateBoard) {
    this.updateToken();
    return axios.put(`/boards/${id}`, data, this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  delete({ id }: IPropsDeleteBoard) {
    this.updateToken();
    return axios.delete(`/boards/${id}`, this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
}

export default new BoardsService();
