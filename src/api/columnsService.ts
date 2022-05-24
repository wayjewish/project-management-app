import { AxiosInstance } from 'axios';
import instance from './instance';
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
  instance: AxiosInstance;

  constructor() {
    this.instance = instance;
  }

  getAll({ boardId }: IPropsGetAllColumn) {
    return this.instance.get(`/boards/${boardId}/columns`);
  }
  get({ boardId, id }: IPropsGetColumn) {
    return this.instance.get(`/boards/${boardId}/columns/${id}`);
  }
  create({ boardId, data }: IPropsAddColumn) {
    return this.instance.post(`/boards/${boardId}/columns`, data);
  }
  update({ boardId, id, data }: IPropsUpdateColumn) {
    return this.instance.put(`/boards/${boardId}/columns/${id}`, data);
  }
  delete({ boardId, id }: IPropsDeleteColumn) {
    return this.instance.delete(`/boards/${boardId}/columns/${id}`);
  }
}

export default new ColumnsService();
