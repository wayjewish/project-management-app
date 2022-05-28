import React, { useRef, useState } from 'react';
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
import { setBoard } from '../../../../store/features/boardSlice';
import {
  changeIsOpenModalColumns,
  setActiveColumn,
  setDeletedColumn,
  updateColumn,
  setDragColumn,
} from '../../../../store/features/columnsSlice';
import { changeIsOpenModalTasks, setDragTask } from '../../../../store/features/tasksSlice';

import { useDrag, useDrop, XYCoord } from 'react-dnd';
import { moveColumn, IDragItemColumn } from './Column.helpers';
import { moveTask, IDragItemTask } from '../../tasks/task/Task.helpers';

interface IProps {
  index: number;
  column: IColumn;
}

function Column(props: IProps) {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.board);
  const { dragColumn } = useAppSelector((state) => state.columns);
  const { dragTask } = useAppSelector((state) => state.tasks);

  const { index, column } = props;

  const refColumnBox = useRef<HTMLDivElement>(null);
  const refColumnContent = useRef<HTMLDivElement>(null);
  const refTasksBox = useRef<HTMLDivElement>(null);

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

  const [{ isDragging }, columnDrag] = useDrag({
    type: 'column',
    item: {
      id: column.id,
      index,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end(item, monitor) {
      console.log('end', item);
      dispatch(setDragColumn(null));
    },
  });

  const [, columnDrop] = useDrop<IDragItemColumn, void, void>({
    accept: 'column',
    hover(item: IDragItemColumn, monitor) {
      if (!board || !dragColumn) return;
      if (!refColumnContent.current) return;
      if (item.id === column.id) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      const hoverBoundingRect = refColumnContent.current?.getBoundingClientRect();
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientX = (clientOffset as XYCoord).x - hoverBoundingRect.top;

      if (item.id === column.id) {
        if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) return;
        if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) return;
      }

      const newColumns = moveColumn({
        board: board,
        dragColumn,
        hoverColumn: column,
      });

      dispatch(
        setBoard({
          ...board,
          columns: newColumns,
        })
      );
    },
    drop(item: IDragItemColumn, monitor) {
      console.log('drop', item);
      //запрос
    },
  });

  const [, taskDropOnColumnBox] = useDrop<IDragItemTask, void, void>({
    accept: 'task',
    hover(item: IDragItemTask, monitor) {
      if (!board || !dragTask) return;
      if (!refColumnBox.current || !refColumnContent.current) return;

      const hoverBoundingRectColumnBox = refColumnBox.current.getBoundingClientRect();
      const hoverBoundingRectColumnContent = refColumnContent.current.getBoundingClientRect();
      const clientOffset = monitor.getClientOffset();
      const hoverClient = {
        x: (clientOffset as XYCoord).x,
        y: (clientOffset as XYCoord).y,
      };

      const onHoverRefColumnBox =
        hoverClient.y > hoverBoundingRectColumnBox.top &&
        hoverClient.y < hoverBoundingRectColumnBox.bottom &&
        hoverClient.x > hoverBoundingRectColumnBox.left &&
        hoverClient.x < hoverBoundingRectColumnBox.right;

      const onHoverRefColumnContent =
        hoverClient.y > hoverBoundingRectColumnContent.top &&
        hoverClient.y < hoverBoundingRectColumnContent.bottom &&
        hoverClient.x > hoverBoundingRectColumnContent.left &&
        hoverClient.x < hoverBoundingRectColumnContent.right;

      if (!onHoverRefColumnBox || (onHoverRefColumnBox && onHoverRefColumnContent)) return;
      if (
        column.tasks[column.tasks.length - 1] &&
        column.tasks[column.tasks.length - 1].id === dragTask.id
      ) {
        return;
      }

      const newData = moveTask({
        board: board,
        dragTask,
        column,
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

  const [, taskDropOnTasksBox] = useDrop<IDragItemTask, void, void>({
    accept: 'task',
    hover(item: IDragItemTask, monitor) {
      if (!board || !dragTask) return;
      if (column.tasks.length > 0) return;

      const newData = moveTask({
        board: board,
        dragTask,
        column,
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

  if (isDragging && dragColumn === null) {
    dispatch(setDragColumn(column));
  }

  columnDrag(refColumnContent);
  taskDropOnColumnBox(columnDrop(refColumnBox));
  taskDropOnTasksBox(refTasksBox);

  return (
    <ColumnBox ref={refColumnBox}>
      <ColumnContent ref={refColumnContent} isDragging={dragColumn?.id === column.id && true}>
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
        <TasksOverflowBox ref={refTasksBox}>
          <TasksBox>
            {column.tasks.map((task, index) => (
              <Task key={task.id} index={index} task={task} parentColumn={column} />
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
