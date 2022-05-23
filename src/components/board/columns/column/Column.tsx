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

import { useAppDispatch } from '../../../../store/hooks';
import {
  changeIsOpenModalColumn,
  changeIsOpenModalTask,
  setActiveColumn,
  setDeletedColumn,
} from '../../../../store/features/board/boardSlice';

interface IProps {
  column: IColumnFull;
}

function Column(props: IProps) {
  const { column } = props;

  const dispatch = useAppDispatch();

  const handlerClickAdd = () => {
    dispatch(setActiveColumn(column));
    dispatch(changeIsOpenModalTask({ formAdd: true }));
  };

  const handlerClickDelete = () => {
    dispatch(setDeletedColumn(column));
    dispatch(changeIsOpenModalColumn({ confirmDelete: true }));
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
              <Task key={task.id} task={task} />
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
