import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { BoardsWrap, CircularProgressBox } from './Boards.styled';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  getBoards,
  deleteBoard,
  changeIsOpenModalBoards,
  setDeletedBoard,
} from '../../store/features/boards/boardsSlice';

import BoardItem from './boardItem/BoardItem';
import BoardAdd from './boardAdd/BoardAdd';
import ModalWindowConfirm from '../../components/modalWindowСonfirm/ModalWindowConfirm';
import BoardFormAdd from './boardFormAdd/BoardFormAdd';

function Boards() {
  const dispatch = useAppDispatch();
  const { boards, isLoading, isOpenModalBoards, deletedBoard } = useAppSelector(
    (state) => state.boards
  );

  const closeModalConfirm = () => {
    dispatch(changeIsOpenModalBoards({ confirmDelete: false }));
  };

  const confirmYes = () => {
    if (deletedBoard) {
      dispatch(deleteBoard({ id: deletedBoard.id }));
      dispatch(setDeletedBoard(null));
    }
  };

  useEffect(() => {
    dispatch(getBoards());
  }, []);

  return (
    <BoardsWrap>
      {!isLoading ? (
        <Grid container spacing={3}>
          {boards &&
            boards.map((board) => (
              <Grid
                key={board.id}
                item
                md={4}
                sm={6}
                xs={12}
                component={Link}
                to={`/boards/${board.id}`}
              >
                <BoardItem board={board} />
              </Grid>
            ))}
          <Grid item md={4} sm={6} xs={12}>
            <BoardAdd />
          </Grid>
        </Grid>
      ) : (
        <CircularProgressBox>
          <CircularProgress />
        </CircularProgressBox>
      )}
      <BoardFormAdd />
      <ModalWindowConfirm
        isOpen={isOpenModalBoards.confirmDelete}
        close={closeModalConfirm}
        title={`Вы уверены, что хотите удалить доску ${deletedBoard?.title} ?`}
        yes={confirmYes}
      />
    </BoardsWrap>
  );
}

export default Boards;
