import React from 'react';
import { BoardWrap, ColumnsBox, ColumnsOverflowBox } from './Board.styled';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  changeIsOpenModalColumn,
  changeIsOpenModalTask,
  deleteColumn,
  deleteTask,
  setDeletedColumn,
  setDeletedTask,
} from '../../store/features/board/boardSlice';

import ModalWindowConfirm from '../modalWindowСonfirm/ModalWindowConfirm';
import Column from './columns/column/Column';
import ColumnAdd from './columns/columnAdd/ColumnAdd';
import ColumnFormAdd from './columns/columnFormAdd/ColumnFormAdd';
import TaskFormAdd from './tasks/taskFormAdd/TaskFormAdd';
import TaskFormEdit from './tasks/taskFormEdit/TaskFormEdit';

function Board() {
  const dispatch = useAppDispatch();
  const { board, isOpenModalColumn, deletedColumn, isOpenModalTask, deletedTask, activeTask } =
    useAppSelector((state) => state.board);

  const closeModalConfirmColumn = () => {
    dispatch(changeIsOpenModalColumn({ confirmDelete: false }));
  };

  const confirmYesColumn = () => {
    if (board && deletedColumn) {
      dispatch(deleteColumn({ boardId: board.id, columnId: deletedColumn.id }));
    }
    dispatch(setDeletedColumn(null));
  };

  const closeModalConfirmTask = () => {
    dispatch(changeIsOpenModalTask({ confirmDelete: false }));
  };

  const confirmYesTask = () => {
    if (deletedTask) {
      dispatch(
        deleteTask({
          boardId: deletedTask.boardId,
          columnId: deletedTask.columnId,
          taskId: deletedTask.id,
        })
      );
    }
    dispatch(setDeletedTask(null));
  };

  return (
    <BoardWrap>
      <ColumnsOverflowBox>
        <ColumnsBox>
          {board?.columns.map((column) => (
            <Column key={column.id} column={column} />
          ))}
          <ColumnAdd />
        </ColumnsBox>
      </ColumnsOverflowBox>

      <ColumnFormAdd />
      <ModalWindowConfirm
        isOpen={isOpenModalColumn.confirmDelete}
        close={closeModalConfirmColumn}
        title={`Вы уверены, что хотите удалить колонку ${deletedColumn?.title} ?`}
        yes={confirmYesColumn}
      />

      <TaskFormAdd />
      {activeTask && <TaskFormEdit />}
      {deletedTask && (
        <ModalWindowConfirm
          isOpen={isOpenModalTask.confirmDelete}
          close={closeModalConfirmTask}
          title={`Вы уверены, что хотите удалить таску ${deletedTask?.title} ?`}
          yes={confirmYesTask}
        />
      )}
    </BoardWrap>
  );
}

export default Board;
