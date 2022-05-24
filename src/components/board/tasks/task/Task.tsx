import React from 'react';
import { Typography } from '@mui/material';
import { TaskCard } from './Task.styled';
import { ITask } from '../../../../api/types';

import { useAppDispatch } from '../../../../store/hooks';
import { changeIsOpenModalTasks, setActiveTask } from '../../../../store/features/tasks/tasksSlice';

interface IProps {
  task: ITask;
}

function Task(props: IProps) {
  const { task } = props;

  const dispatch = useAppDispatch();

  const handlerClick = () => {
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
