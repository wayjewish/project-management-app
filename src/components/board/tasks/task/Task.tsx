import React, { useRef } from 'react';
import { Typography } from '@mui/material';
import { TaskCard } from './Task.styled';
import { IColumn, ITask } from '../../../../api/types';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setBoard } from '../../../../store/features/boardSlice';
import { setActiveColumn } from '../../../../store/features/columnsSlice';
import { changeIsOpenModalTasks, setActiveTask } from '../../../../store/features/tasksSlice';

import { useDrag, useDrop, XYCoord } from 'react-dnd';

interface IProps {
  index: number;
  task: ITask;
  parentColumn: IColumn;
}

interface IDragItemTask {
  id: string;
  index: number;
  parentColumnId: string;
}

function Task(props: IProps) {
  const { task, index, parentColumn } = props;

  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.board);

  const ref = useRef<HTMLDivElement>(null);

  const handlerClick = () => {
    dispatch(setActiveColumn(parentColumn)); // жестоко
    dispatch(setActiveTask(task));
    dispatch(changeIsOpenModalTasks({ formEdit: true }));
  };

  const moveCard = (dragItem: IDragItemTask) => {
    if (!board) return;

    const newColumns = [...board.columns];

    const hoverColumnIndex = newColumns.map((column) => column.id).indexOf(parentColumn.id);
    const newHoverColumnTasks = [...newColumns[hoverColumnIndex].tasks];

    let dragTask: ITask | null = null;

    const isDiffColumn = dragItem.parentColumnId !== parentColumn.id;
    if (isDiffColumn) {
      const dragColumnIndex = newColumns
        .map((column) => column.id)
        .indexOf(dragItem.parentColumnId);
      const newDragColumnTasks = [...newColumns[dragColumnIndex].tasks];

      const checkDragTaskInDragColumn = newDragColumnTasks.find((task) => task.id === dragItem.id);
      if (checkDragTaskInDragColumn) {
        dragTask = newDragColumnTasks[dragItem.index];
        newDragColumnTasks.splice(dragItem.index, 1);

        newColumns[dragColumnIndex] = {
          ...newColumns[dragColumnIndex],
          tasks: newDragColumnTasks,
        };
      }
    } else {
      const checkDragTaskInHoverColumn = newHoverColumnTasks.find(
        (task) => task.id === dragItem.id
      );

      if (checkDragTaskInHoverColumn) {
        dragTask = newHoverColumnTasks[dragItem.index];
        newHoverColumnTasks.splice(dragItem.index, 1);
      }
    }

    if (!dragTask) return;

    newHoverColumnTasks.splice(index, 0, dragTask);
    newColumns[hoverColumnIndex] = {
      ...newColumns[hoverColumnIndex],
      tasks: newHoverColumnTasks,
    };

    dispatch(
      setBoard({
        ...board,
        columns: newColumns,
      })
    );
  };

  const [{ isDragging }, drag] = useDrag({
    type: 'task',
    item: {
      id: task.id,
      index,
      parentColumnId: parentColumn.id,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [_, drop] = useDrop<IDragItemTask, void, void>({
    accept: 'task',
    hover(item: IDragItemTask, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(item);
      item.index = hoverIndex;
      item.parentColumnId = parentColumn.id;
    },
  });

  drag(drop(ref));

  return (
    <TaskCard ref={ref} variant="elevation" elevation={8} onClick={handlerClick}>
      <Typography component="p" variant="h5">
        {task.title}
      </Typography>
    </TaskCard>
  );
}

export default Task;
