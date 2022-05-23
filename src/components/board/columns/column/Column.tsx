import React from 'react';
import { Typography, Button } from '@mui/material';
import {
  ColumnBox,
  ColumnContent,
  TopBox,
  TasksOverflowBox,
  TasksBox,
  BotBox,
} from './Column.styled';
import { IColumnFull } from '../../../../api/types';
import Task from '../../tasks/task/Task';

interface IProps {
  column: IColumnFull;
}

function Column(props: IProps) {
  const { column } = props;

  return (
    <ColumnBox>
      <ColumnContent>
        <TopBox>
          <Typography component="p" variant="body1">
            {column.title}
          </Typography>
        </TopBox>
        <TasksOverflowBox>
          <TasksBox>
            {column.tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </TasksBox>
        </TasksOverflowBox>
        <BotBox>
          <Button variant="text">+ Add</Button>
          <Button variant="text" color="error">
            Remove
          </Button>
        </BotBox>
      </ColumnContent>
    </ColumnBox>
  );
}

export default Column;
