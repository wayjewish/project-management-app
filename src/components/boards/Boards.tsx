import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { BoardsWrap, CircularProgressBox } from './Boards.styled';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getBoards, deleteBoard } from '../../store/features/boards/boardsSlice';

import BoardItem from '../../components/boards/BoardItem/BoardItem';
import BoardAdd from '../../components/boards/BoardAdd/BoardAdd';
import ModalWindowConfirm from '../../components/modalWindowСonfirm/ModalWindowConfirm';
import FormAddBoard from './formAddBoard/FormAddBoard';
import { IBoard } from '../../types';

function Boards() {
  const dispatch = useAppDispatch();
  const { boards, loading } = useAppSelector((state) => state.boards);

  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [openModalAddBoard, setOpenModalAddBoard] = useState(false);
  const [deletedBoard, setDeletedBoard] = useState<IBoard | null>();

  const openModalFormAddBoard = () => {
    setOpenModalAddBoard(true);
  };

  const RemoveBoardInCard = (board: IBoard) => {
    setOpenModalConfirm(true);
    setDeletedBoard(board);
  };

  const DeleteBoardConfirm = () => {
    if (deletedBoard) {
      dispatch(deleteBoard(deletedBoard.id));
      setDeletedBoard(null);
    }
  };

  useEffect(() => {
    dispatch(getBoards());
  }, []);

  return (
    <BoardsWrap>
      {!loading ? (
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
                <BoardItem board={board} removeBoard={RemoveBoardInCard} />
              </Grid>
            ))}
          <Grid item md={4} sm={6} xs={12}>
            <BoardAdd openModalFormAddBoard={openModalFormAddBoard} />
          </Grid>
        </Grid>
      ) : (
        <CircularProgressBox>
          <CircularProgress />
        </CircularProgressBox>
      )}
      {openModalAddBoard && (
        <FormAddBoard openModal={openModalAddBoard} setOpenModal={setOpenModalAddBoard} />
      )}
      {openModalConfirm && (
        <ModalWindowConfirm
          openModal={openModalConfirm}
          setOpenModal={setOpenModalConfirm}
          title={`Вы уверены, что хотите удалить ${deletedBoard?.title} ?`}
          yes={DeleteBoardConfirm}
        />
      )}
    </BoardsWrap>
  );
}

export default Boards;
