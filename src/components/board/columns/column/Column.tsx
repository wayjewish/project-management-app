import React, { useState } from 'react';
import { Typography, Button, TextField } from '@mui/material';
import {
  ColumnBox,
  ColumnContent,
  TopBox,
  TitleBox,
  TopBtnsBox,
  TasksOverflowBox,
  TasksBox,
  BotBox,
} from './Column.styled';
import { IColumn } from '../../../../api/types';
import Task from '../../tasks/task/Task';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  changeIsOpenModalColumns,
  setActiveColumn,
  setDeletedColumn,
  updateColumn,
} from '../../../../store/features/columns/columnsSlice';
import { changeIsOpenModalTasks } from '../../../../store/features/tasks/tasksSlice';

interface IProps {
  column: IColumn;
}

function Column(props: IProps) {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.board);

  const { column } = props;

  const [isChangeTitle, setIsChangeTitle] = useState(false);
  const [valueTitle, setValueTitle] = useState(column.title);

  const handlerClickAdd = () => {
    dispatch(setActiveColumn(column));
    dispatch(changeIsOpenModalTasks({ formAdd: true }));
  };

  const handlerClickDelete = () => {
    dispatch(setDeletedColumn(column));
    dispatch(changeIsOpenModalColumns({ confirmDelete: true }));
  };

  const showChangeTitle = () => {
    setValueTitle(column.title);
    setIsChangeTitle(true);
  };
  const changeValueTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueTitle(e.target.value);
  };
  const submitTitle = () => {
    if (board) {
      dispatch(
        updateColumn({
          boardId: board.id,
          id: column.id,
          data: {
            title: valueTitle,
            order: column.order,
          },
        })
      );
    }
  };
  const hideChangeTitle = () => {
    setIsChangeTitle(false);
  };

  return (
    <ColumnBox>
      <ColumnContent>
        {isChangeTitle ? (
          <TopBox>
            <TextField
              label="Title"
              variant="standard"
              value={valueTitle}
              onChange={changeValueTitle}
            />
            <TopBtnsBox>
              <Button variant="text" onClick={submitTitle}>
                Submit
              </Button>
              <Button variant="text" color="error" onClick={hideChangeTitle}>
                Cancel
              </Button>
            </TopBtnsBox>
          </TopBox>
        ) : (
          <TopBox>
            <TitleBox onClick={showChangeTitle}>
              <Typography component="p" variant="body1">
                {column.title}
              </Typography>
            </TitleBox>
          </TopBox>
        )}
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
