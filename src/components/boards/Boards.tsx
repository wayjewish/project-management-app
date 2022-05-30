import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { BoardsWrap } from './Boards.styled';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  getBoards,
  deleteBoard,
  changeIsOpenModalBoards,
  setDeletedBoard,
} from '../../store/features/boardsSlice';

import BoardItem from './boardItem/BoardItem';
import BoardAdd from './boardAdd/BoardAdd';
import ModalWindowConfirm from '../../components/modalWindowСonfirm/ModalWindowConfirm';
import BoardFormAdd from './boardFormAdd/BoardFormAdd';
import Loading from '../loading/Loading';

import { useTranslation } from 'react-i18next';

function Boards() {
  const { t } = useTranslation();
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
        <Loading />
      )}
      <BoardFormAdd />
      <ModalWindowConfirm
        isOpen={isOpenModalBoards.confirmDelete}
        close={closeModalConfirm}
        title={`${t('pages.boards.confirm')} ${deletedBoard?.title} ?`}
        yes={confirmYes}
      />
    </BoardsWrap>
  );
}

export default Boards;
