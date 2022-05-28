import React, { useRef } from 'react';
import { Typography } from '@mui/material';
import { TaskCard } from './Task.styled';
import { IColumn, ITask } from '../../../../api/types';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setBoard } from '../../../../store/features/boardSlice';
import { setActiveColumn } from '../../../../store/features/columnsSlice';
import {
  changeIsOpenModalTasks,
  setActiveTask,
  setDragTask,
} from '../../../../store/features/tasksSlice';

import { useDrag, useDrop, XYCoord } from 'react-dnd';
import { moveTask, IDragItemTask } from './Task.helpers';

interface IProps {
  index: number;
  task: ITask;
  parentColumn: IColumn;
}

function Task(props: IProps) {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.board);
  const { dragTask } = useAppSelector((state) => state.tasks);

  const { task, index, parentColumn } = props;

  const ref = useRef<HTMLDivElement>(null);

  const handlerClick = () => {
    dispatch(setActiveColumn(parentColumn));
    dispatch(setActiveTask(task));
    dispatch(changeIsOpenModalTasks({ formEdit: true }));
  };

  const [{ isDragging }, drag] = useDrag({
    type: 'task',
    item: {
      id: task.id,
      index,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end(item, monitor) {
      console.log('end', item);
      dispatch(setDragTask(null));
    },
  });

  const [, drop] = useDrop<IDragItemTask, void, void>({
    accept: 'task',
    hover(item: IDragItemTask, monitor) {
      if (!board || !dragTask) return;
      if (!ref.current) return;
      if (task.id === dragTask.id) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (parentColumn.id === dragTask.columnId) {
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      }

      const newData = moveTask({
        board: board,
        dragTask,
        hoverTask: task,
        column: parentColumn,
      });

      if (!newData) return;

      dispatch(
        setBoard({
          ...board,
          columns: newData.columns,
        })
      );

      dispatch(setDragTask(newData.dragTask));
    },
    drop(item: IDragItemTask, monitor) {
      console.log('drop', item);
      //запрос
    },
  });

  if (isDragging && dragTask === null) {
    dispatch(setDragTask({ ...task, boardId: board?.id, columnId: parentColumn.id }));
  }

  drag(drop(ref));

  return (
    <TaskCard
      ref={ref}
      variant="elevation"
      elevation={8}
      onClick={handlerClick}
      isDragging={dragTask?.id === task.id && true}
    >
      <Typography component="p" variant="h5">
        {task.title}
      </Typography>
    </TaskCard>
  );
}

export default Task;
