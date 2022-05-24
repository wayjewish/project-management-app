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
import { IColumn } from '../../../../api/types';
import Task from '../../tasks/task/Task';

import { useAppDispatch } from '../../../../store/hooks';
import {
  changeIsOpenModalColumns,
  setActiveColumn,
  setDeletedColumn,
} from '../../../../store/features/columns/columnsSlice';
import { changeIsOpenModalTasks } from '../../../../store/features/tasks/tasksSlice';

interface IProps {
  column: IColumn;
}

function Column(props: IProps) {
  const { column } = props;

  const dispatch = useAppDispatch();

  const handlerClickAdd = () => {
    dispatch(setActiveColumn(column));
    dispatch(changeIsOpenModalTasks({ formAdd: true }));
  };

  const handlerClickDelete = () => {
    dispatch(setDeletedColumn(column));
    dispatch(changeIsOpenModalColumns({ confirmDelete: true }));
  };

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
              <Task key={task.id} task={task} parentColumn={column} />
            ))}
          </TasksBox>
        </TasksOverflowBox>
        <BotBox>
          <Button variant="text" onClick={handlerClickAdd}>
            + Add
          </Button>
          <Button variant="text" color="error" onClick={handlerClickDelete}>
            Remove
          </Button>
        </BotBox>
      </ColumnContent>
    </ColumnBox>
  );
}

export default Column;
