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
} from '../../store/features/columnsSlice';
import {
  changeIsOpenModalTasks,
  deleteTask,
  setDeletedTask,
  setActiveTask,
} from '../../store/features/tasksSlice';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useTranslation } from 'react-i18next';

function Board() {
  const { t } = useTranslation();
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
    if (deletedTask && deletedTask.boardId && deletedTask.columnId) {
      dispatch(
        deleteTask({
          boardId: deletedTask.boardId,
          columnId: deletedTask.columnId,
          id: deletedTask.id,
        })
      );
    }
    dispatch(setDeletedTask(null));
  };

  const confirmNoTask = () => {
    dispatch(setActiveTask({ ...deletedTask }));
    dispatch(changeIsOpenModalTasks({ formEdit: true }));
    dispatch(setDeletedTask(null));
  };

  return (
    <BoardWrap>
      <DndProvider backend={HTML5Backend}>
        <ColumnsOverflowBox>
          <ColumnsBox>
            {board?.columns.map((column, index) => (
              <Column key={column.id} index={index} column={column} />
            ))}
            <ColumnAdd />
          </ColumnsBox>
        </ColumnsOverflowBox>
      </DndProvider>

      {isOpenModalColumns.formAdd && <ColumnFormAdd />}
      {isOpenModalColumns.confirmDelete && (
        <ModalWindowConfirm
          isOpen={isOpenModalColumns.confirmDelete}
          close={closeModalConfirmColumn}
          title={`${t('pages.board.columns.confirm')} ${deletedColumn?.title} ?`}
          yes={confirmYesColumn}
        />
      )}

      {isOpenModalTasks.formAdd && <TaskFormAdd />}
      {isOpenModalTasks.formEdit && <TaskFormEdit />}
      {isOpenModalTasks.confirmDelete && (
        <ModalWindowConfirm
          isOpen={isOpenModalTasks.confirmDelete}
          close={closeModalConfirmTask}
          title={`${t('pages.board.tasks.confirm')} ${deletedTask?.title} ?`}
          yes={confirmYesTask}
          no={confirmNoTask}
        />
      )}
    </BoardWrap>
  );
}

export default Board;
