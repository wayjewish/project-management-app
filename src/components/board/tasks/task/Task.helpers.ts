import update from 'immutability-helper';
import { IBoard, IColumn, ITask } from '../../../../api/types';

export interface IDragItemTask {
  id: string;
  index: number;
}

interface IPropsMoveTask {
  board: IBoard;
  dragTask: ITask;
  hoverTask?: ITask;
  column: IColumn;
}

export const moveTask = (props: IPropsMoveTask) => {
  const { board, dragTask, hoverTask, column } = props;

  if (!dragTask.columnId) return;

  const newDragTask = { ...dragTask };
  const newColumns = [...board.columns];

  const hoverColumnIndex = newColumns.map((column) => column.id).indexOf(column.id);
  const hoverColumn = newColumns[hoverColumnIndex];

  const isDiffColumn = dragTask.columnId !== hoverColumn.id;

  if (isDiffColumn) {
    const dragColumnIndex = newColumns.map((column) => column.id).indexOf(dragTask.columnId);
    const dragColumn = newColumns[dragColumnIndex];

    const dragTaskIndex = dragColumn.tasks.map((task) => task.id).indexOf(dragTask.id);
    if (dragTaskIndex !== -1) {
      const newTasks = update(newColumns[dragColumnIndex].tasks, {
        $splice: [[dragTaskIndex, 1]],
      });

      newColumns[dragColumnIndex] = {
        ...newColumns[dragColumnIndex],
        tasks: newTasks,
      };
    }
  } else {
    const dragTaskIndex = hoverColumn.tasks.map((task) => task.id).indexOf(dragTask.id);
    if (dragTaskIndex !== -1) {
      const newTasks = update(newColumns[hoverColumnIndex].tasks, {
        $splice: [[dragTaskIndex, 1]],
      });

      newColumns[hoverColumnIndex] = {
        ...newColumns[hoverColumnIndex],
        tasks: newTasks,
      };
    }
  }

  let newTasks: ITask[] | null;
  if (hoverTask) {
    const hoverTaskIndex = hoverColumn.tasks.map((task) => task.id).indexOf(hoverTask.id);

    newTasks = update(newColumns[hoverColumnIndex].tasks, {
      $splice: [[hoverTaskIndex, 0, dragTask]],
    });
  } else {
    const newIndex = hoverColumn.tasks.length > 0 ? hoverColumn.tasks.length : 0;

    newTasks = update(newColumns[hoverColumnIndex].tasks, {
      $splice: [[newIndex, 0, dragTask]],
    });
  }

  if (!newTasks) return;

  newColumns[hoverColumnIndex] = {
    ...newColumns[hoverColumnIndex],
    tasks: newTasks,
  };

  newDragTask.columnId = hoverColumn.id;

  return { dragTask: newDragTask, columns: newColumns };
};
