import axios, { AxiosRequestConfig } from 'axios';
import { IColumnData, IColumnDataFull } from './types';

export interface IPropsGetAllColumn {
  boardId: string;
}

export interface IPropsGetColumn {
  boardId: string;
  id: string;
}

export interface IPropsAddColumn {
  boardId: string;
  data: IColumnData;
}

export interface IPropsUpdateColumn {
  boardId: string;
  id: string;
  data: IColumnDataFull;
}

export interface IPropsDeleteColumn {
  boardId: string;
  id: string;
}

class ColumnsService {
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
    this.updateToken();
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

  getAll({ boardId }: IPropsGetAllColumn) {
    this.updateToken();
    return axios.get(`/boards/${boardId}/columns`, this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  get({ boardId, id }: IPropsGetColumn) {
    this.updateToken();
    return axios.get(`/boards/${boardId}/columns/${id}`, this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  create({ boardId, data }: IPropsAddColumn) {
    this.updateToken();
    return axios.post(`/boards/${boardId}/columns`, data, this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  update({ boardId, id, data }: IPropsUpdateColumn) {
    this.updateToken();
    return axios.put(`/boards/${boardId}/columns/${id}`, data, this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  delete({ boardId, id }: IPropsDeleteColumn) {
    this.updateToken();
    return axios.delete(`/boards/${boardId}/columns/${id}`, this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
}

export default new ColumnsService();
