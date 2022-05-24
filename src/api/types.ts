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
export interface IBoardDataFull extends IBoardData {
  columns: IColumn[];
}
export interface IBoard extends IBoardDataFull {
  id: string;
}

export interface IColumnData {
  title: string;
}
export interface IColumnDataFull extends IColumnData {
  order: number;
  tasks: ITask[];
}
export interface IColumn extends IColumnDataFull {
  id: string;
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
