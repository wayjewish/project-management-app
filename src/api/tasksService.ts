import axios, { AxiosRequestConfig } from 'axios';
import { ITaskData, ITaskDataFull } from './types';

export interface IPropsGetAllTask {
  boardId: string;
  columnId: string;
}

export interface IPropsGetTask {
  boardId: string;
  columnId: string;
  id: string;
}

export interface IPropsAddTask {
  boardId: string;
  columnId: string;
  data: ITaskData;
}

export interface IPropsUpdateTask {
  boardId: string;
  columnId: string;
  id: string;
  data: ITaskDataFull;
}

export interface IPropsDeleteTask {
  boardId: string;
  columnId: string;
  id: string;
}

class TasksService {
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

  getAll({ boardId, columnId }: IPropsGetAllTask) {
    this.updateToken();
    return axios.get(`/boards/${boardId}/columns/${columnId}/tasks`, this.config).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  get({ boardId, columnId, id }: IPropsGetTask) {
    this.updateToken();
    return axios
      .get(`/boards/${boardId}/columns/${columnId}/tasks/${id}`, this.config)
      .catch((error) => {
        return { ...error.response, catch: true };
      });
  }
  create({ boardId, columnId, data }: IPropsAddTask) {
    this.updateToken();
    return axios
      .post(`/boards/${boardId}/columns/${columnId}/tasks`, data, this.config)
      .catch((error) => {
        return { ...error.response, catch: true };
      });
  }
  update({ boardId, columnId, id, data }: IPropsUpdateTask) {
    this.updateToken();
    return axios
      .put(`/boards/${boardId}/columns/${columnId}/tasks/${id}`, data, this.config)
      .catch((error) => {
        return { ...error.response, catch: true };
      });
  }
  delete({ boardId, columnId, id }: IPropsDeleteTask) {
    this.updateToken();
    return axios
      .delete(`/boards/${boardId}/columns/${columnId}/tasks/${id}`, this.config)
      .catch((error) => {
        return { ...error.response, catch: true };
      });
  }
}

export default new TasksService();
