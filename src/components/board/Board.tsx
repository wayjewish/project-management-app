import React from 'react';
import { BoardWrap, ColumnsBox, ColumnsOverflowBox } from './Board.styled';
import ModalWindowConfirm from '../modalWindowСonfirm/ModalWindowConfirm';
import Column from './columns/column/Column';
import ColumnAdd from './columns/columnAdd/ColumnAdd';
import ColumnFormAdd from './columns/columnFormAdd/ColumnFormAdd';
import TaskFormAdd from './tasks/taskFormAdd/TaskFormAdd';
import TaskFormEdit from './tasks/taskFormEdit/TaskFormEdit';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  changeIsOpenModalColumns,
  deleteColumn,
  setDeletedColumn,
} from '../../store/features/columns/columnsSlice';
import {
  changeIsOpenModalTasks,
  deleteTask,
  setDeletedTask,
} from '../../store/features/tasks/tasksSlice';

function Board() {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.board);
  const { isOpenModalColumns, deletedColumn } = useAppSelector((state) => state.columns);
  const { isOpenModalTasks, deletedTask } = useAppSelector((state) => state.tasks);

  const closeModalConfirmColumn = () => {
    dispatch(changeIsOpenModalColumns({ confirmDelete: false }));
  };

  const confirmYesColumn = () => {
    if (board && deletedColumn) {
      dispatch(deleteColumn({ boardId: board.id, id: deletedColumn.id }));
    }
    dispatch(setDeletedColumn(null));
  };

  const closeModalConfirmTask = () => {
    dispatch(changeIsOpenModalTasks({ confirmDelete: false }));
  };

  const confirmYesTask = () => {
    if (deletedTask) {
      /*dispatch(
        deleteTask({
          boardId: deletedTask.boardId,
          columnId: deletedTask.columnId,
          id: deletedTask.id,
        })
      );*/
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
        isOpen={isOpenModalColumns.confirmDelete}
        close={closeModalConfirmColumn}
        title={`Вы уверены, что хотите удалить колонку ${deletedColumn?.title} ?`}
        yes={confirmYesColumn}
      />

      {isOpenModalTasks.formAdd && <TaskFormAdd />}
      {isOpenModalTasks.formEdit && <TaskFormEdit />}
      {isOpenModalTasks.confirmDelete && (
        <ModalWindowConfirm
          isOpen={isOpenModalTasks.confirmDelete}
          close={closeModalConfirmTask}
          title={`Вы уверены, что хотите удалить таску ${deletedTask?.title} ?`}
          yes={confirmYesTask}
        />
      )}
    </BoardWrap>
  );
}

export default Board;
