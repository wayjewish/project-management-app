import React, { useRef } from 'react';
import { Typography } from '@mui/material';
import { TaskCard } from './Task.styled';
import { IColumn, ITask } from '../../../../api/types';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setBoard } from '../../../../store/features/boardSlice';
import { setActiveColumn } from '../../../../store/features/columnsSlice';
import { changeIsOpenModalTasks, setActiveTask } from '../../../../store/features/tasksSlice';

import { useDrag, useDrop, XYCoord } from 'react-dnd';
import { getNewColsWhenMoveTask, IDragItemTask } from './Task.helpers';

interface IProps {
  index: number;
  task: ITask;
  parentColumn: IColumn;
}

function Task(props: IProps) {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.board);

  const { task, index, parentColumn } = props;

  const ref = useRef<HTMLDivElement>(null);

  const handlerClick = () => {
    dispatch(setActiveColumn(parentColumn)); // жестоко
    dispatch(setActiveTask(task));
    dispatch(changeIsOpenModalTasks({ formEdit: true }));
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

  const [collectedProps, drop] = useDrop<IDragItemTask, void, void>({
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

      if (!board) {
        return;
      }

      const newColumns = getNewColsWhenMoveTask({
        board: board,
        dragItem: item,
        hoverTask: { ...task, index },
        hoverColumn: parentColumn,
      });

      dispatch(
        setBoard({
          ...board,
          columns: newColumns,
        })
      );

      item.index = hoverIndex;
      item.parentColumnId = parentColumn.id;
    },
    drop(item: IDragItemTask, monitor) {
      console.log(item);
    },
  });

  drag(drop(ref));

  return (
    <TaskCard
      ref={ref}
      variant="elevation"
      elevation={8}
      onClick={handlerClick}
      isDragging={isDragging}
    >
      <Typography component="p" variant="h5">
        {task.title}
      </Typography>
    </TaskCard>
  );
}

export default Task;
