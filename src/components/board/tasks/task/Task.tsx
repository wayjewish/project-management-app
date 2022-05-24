import React from 'react';
import { Typography } from '@mui/material';
import { TaskCard } from './Task.styled';
import { IColumn, ITask } from '../../../../api/types';

import { useAppDispatch } from '../../../../store/hooks';
import { setActiveColumn } from '../../../../store/features/columns/columnsSlice';
import { changeIsOpenModalTasks, setActiveTask } from '../../../../store/features/tasks/tasksSlice';

interface IProps {
  task: ITask;
  parentColumn: IColumn;
}

function Task(props: IProps) {
  const { task, parentColumn } = props;

  const dispatch = useAppDispatch();

  const handlerClick = () => {
    dispatch(setActiveColumn(parentColumn)); // жестоко
    dispatch(setActiveTask(task));
    dispatch(changeIsOpenModalTasks({ formEdit: true }));
  };

  return (
    <TaskCard variant="elevation" elevation={8} onClick={handlerClick}>
      <Typography component="p" variant="h5">
        {task.title}
      </Typography>
    </TaskCard>
  );
}

export default Task;
