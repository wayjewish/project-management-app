import update from 'immutability-helper';
import { IBoard, IColumn, ITask } from '../../../../api/types';

export interface IDragItemTask {
  id: string;
  index: number;
  parentColumnId: string;
}

interface IHoverTask extends ITask {
  index: number;
}

interface IPropsMoveTask {
  board: IBoard;
  dragItem: IDragItemTask;
  hoverTask?: IHoverTask;
  hoverColumn: IColumn;
}

export const getNewColsWhenMoveTask = (props: IPropsMoveTask) => {
  const { board, dragItem, hoverTask, hoverColumn } = props;

  const newColumns = [...board.columns];

  const hoverColumnIndex = newColumns.map((column) => column.id).indexOf(hoverColumn.id);

  let dragTask: ITask | null = null;

  const isDiffColumn = dragItem.parentColumnId !== hoverColumn.id;
  if (isDiffColumn) {
    const dragColumnIndex = newColumns.map((column) => column.id).indexOf(dragItem.parentColumnId);
    const dragColumn = newColumns[dragColumnIndex];

    const checkDragTaskInDragColumn = dragColumn.tasks.find((task) => task.id === dragItem.id);
    if (checkDragTaskInDragColumn) {
      dragTask = dragColumn.tasks[dragItem.index];

      const newTasks = update(dragColumn.tasks, {
        $splice: [[dragItem.index, 1]],
      });

      newColumns[dragColumnIndex] = {
        ...newColumns[dragColumnIndex],
        tasks: newTasks,
      };
    }
  } else {
    const checkDragTaskInHoverColumn = hoverColumn.tasks.find((task) => task.id === dragItem.id);
    if (checkDragTaskInHoverColumn) {
      dragTask = hoverColumn.tasks[dragItem.index];

      const newTasks = update(hoverColumn.tasks, {
        $splice: [[dragItem.index, 1]],
      });

      newColumns[hoverColumnIndex] = {
        ...newColumns[hoverColumnIndex],
        tasks: newTasks,
      };
    }
  }

  if (!dragTask) return;

  let newTasks: ITask[] | null;
  if (hoverTask) {
    newTasks = update(hoverColumn.tasks, {
      $splice: [[hoverTask.index, 0, dragTask]],
    });
  } else {
    newTasks = update(hoverColumn.tasks, {
      $splice: [[hoverColumn.tasks.length, 0, dragTask]],
    });
  }

  if (!newTasks) return;

  newColumns[hoverColumnIndex] = {
    ...newColumns[hoverColumnIndex],
    tasks: newTasks,
  };

  return newColumns;
};
