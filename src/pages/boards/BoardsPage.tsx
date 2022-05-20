import React, { useEffect, useState } from 'react';
import { Container, Grid, CircularProgress } from '@mui/material';
import { TypographyBoardTitle, CircularProgressBox } from './BoardsPage.styled';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getBoards, deleteBoard } from '../../store/features/boards/boardsSlice';

import BoardItem from '../../components/boards/BoardItem/BoardItem';
import BoardAdd from '../../components/boards/BoardAdd/BoardAdd';
import ModalWindowConfirm from '../../components/modalWindowСonfirm/ModalWindowConfirm';
import FormNewBoard from '../../components/boards/formNewBoard/FormNewBoard';

function Board() {
  const dispatch = useAppDispatch();
  const boards = useAppSelector((state) => state.boards.boards);
  const loader = useAppSelector((state) => state.boards.loading);

  const [openModal, setOpenModal] = useState(false);
  const [openModalAddNewBoard, setOpenModalAddNewBoard] = useState(false);
  const [idDeleteBoard, setIdDeleteBoard] = useState('');
  const [titleDeleteBoard, setTitleDeleteBoard] = useState('');

  const initModalWindowDeleteBoard = (id: string, title: string) => {
    setOpenModal(true);
    setIdDeleteBoard(id);
    setTitleDeleteBoard(title);
  };

  const reuseDelete = () => {
    setOpenModal(false);
    setOpenModalAddNewBoard(false);
  };
  const deleteElement = () => {
    dispatch(deleteBoard(idDeleteBoard));
  };

  const openModalFormAddBoard = () => {
    setOpenModalAddNewBoard(true);
  };

  useEffect(() => {
    dispatch(getBoards());
  }, []);

  return (
    <Container>
      <TypographyBoardTitle variant="h3">Boards</TypographyBoardTitle>
      {loader ? (
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 2, md: 3 }}>
          {boards.map((board) => {
            return (
              <BoardItem
                key={board.id}
                title={board.title}
                description={board.description}
                id={board.id}
                initModalWindow={initModalWindowDeleteBoard}
              />
            );
          })}
          <BoardAdd openModalFormAddBoard={openModalFormAddBoard} />
        </Grid>
      ) : (
        <CircularProgressBox>
          <CircularProgress />
        </CircularProgressBox>
      )}
      {openModal ? (
        <ModalWindowConfirm
          textMassage={`Вы уверненны, что хотите удалить ${titleDeleteBoard} ?`}
          reuseDelete={reuseDelete}
          deleteElement={deleteElement}
        />
      ) : null}
      {openModalAddNewBoard ? <FormNewBoard reuseDelete={reuseDelete} /> : null}
    </Container>
  );
}

export default Board;
