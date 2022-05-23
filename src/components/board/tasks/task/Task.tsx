import React from 'react';
import { Typography, Button } from '@mui/material';
import { TaskCard } from './Task.styled';
import { ITask } from '../../../../types';

interface IProps {
  task: ITask;
}

function Task(props: IProps) {
  const { task } = props;

  return (
    <TaskCard variant="elevation" elevation={8}>
      <Typography component="p" variant="h5">
        {task.title}
      </Typography>
    </TaskCard>
  );
}

export default Task;
