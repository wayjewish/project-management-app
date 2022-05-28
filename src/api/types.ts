export interface IUserData {
  name: string;
  login: string;
}
export interface IUser extends IUserData {
  id: string;
}

export interface IBoardData {
  title: string;
  description: string;
}
export interface IBoard extends IBoardData {
  id: string;
  columns: IColumn[];
}

export interface IColumnData {
  title: string;
}
export interface IColumnDataFull extends IColumnData {
  order: number;
}
export interface IColumn extends IColumnDataFull {
  id: string;
  tasks: ITask[];
}

export interface ITaskData {
  title: string;
  description: string;
  userId: string;
}
export interface ITaskDataFull extends ITaskData {
  order: number;
  boardId?: string;
  columnId?: string;
}
export interface ITask extends ITaskDataFull {
  id: string;
  files: File[];
}

export interface IErrorApi {
  code: number;
  message: string;
}
