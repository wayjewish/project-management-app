import { AxiosInstance } from 'axios';
import instance from './instance';
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
  instance: AxiosInstance;

  constructor() {
    this.instance = instance;
  }

  getAll({ boardId, columnId }: IPropsGetAllTask) {
    return this.instance.get(`/boards/${boardId}/columns/${columnId}/tasks`).catch((error) => {
      return { ...error.response, catch: true };
    });
  }
  get({ boardId, columnId, id }: IPropsGetTask) {
    return this.instance
      .get(`/boards/${boardId}/columns/${columnId}/tasks/${id}`)
      .catch((error) => {
        return { ...error.response, catch: true };
      });
  }
  create({ boardId, columnId, data }: IPropsAddTask) {
    return this.instance
      .post(`/boards/${boardId}/columns/${columnId}/tasks`, data)
      .catch((error) => {
        return { ...error.response, catch: true };
      });
  }
  update({ boardId, columnId, id, data }: IPropsUpdateTask) {
    return this.instance
      .put(`/boards/${boardId}/columns/${columnId}/tasks/${id}`, data)
      .catch((error) => {
        return { ...error.response, catch: true };
      });
  }
  delete({ boardId, columnId, id }: IPropsDeleteTask) {
    return this.instance
      .delete(`/boards/${boardId}/columns/${columnId}/tasks/${id}`)
      .catch((error) => {
        return { ...error.response, catch: true };
      });
  }
}

export default new TasksService();
