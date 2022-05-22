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
  order: number;
}
export interface IColumn extends IColumnData {
  id: string;
}
export interface IColumnFull extends IColumn {
  tasks: ITask[];
}

export interface ITaskData {
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
  files: File[];
}
export interface ITask extends ITaskData {
  id: string;
}
