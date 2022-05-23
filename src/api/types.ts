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
}
export interface IBoardFull extends IBoard {
  columns: IColumnFull[];
}

export interface IColumnData {
  title: string;
}
export interface IColumn extends IColumnData {
  id: string;
  order: number;
}
export interface IColumnFull extends IColumn {
  tasks: ITask[];
}

export interface ITaskData {
  title: string;
  description: string;
  userId: string;
}
export interface ITask extends ITaskData {
  id: string;
  order: number;
  boardId: string;
  columnId: string;
  files: File[];
}
