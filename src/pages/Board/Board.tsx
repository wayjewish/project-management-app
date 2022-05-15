import React, { useState } from 'react';
import { TypographyBoardTitle } from './Board.styled';
import { Container, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBoard } from '../../features/BoardSlice/BoardSlice';
import BoardItem from './BoardItem/BoardItem';
import BoardAdd from './BoardAdd/BoardAdd';
import ModalWindowConfirm from '../../components/UI/modalWindowСonfirmation/ModalWindowСonfirm';

interface IBoard {
  id: string;
  title: string;
  description: string;
}
interface IBoardsState {
  boards: { boards: IBoard[] };
}

function Board() {
  const dispatch = useDispatch();
  const boards = useSelector((state: IBoardsState) => state.boards.boards);
  const [openModal, setOpenModal] = useState(false);
  const [idDeleteBoard, setIdDeleteBoard] = useState('');

  const initModalWindow = (id: string) => {
    setOpenModal(true);
    setIdDeleteBoard(id);
  };

  const reuseDelete = () => {
    setOpenModal(false);
  };
  const deleteElement = () => {
    const boardsWithoutDeleteBoard = boards.map((board) => {
      return board.id !== idDeleteBoard ? board : null;
    });
    const index = boardsWithoutDeleteBoard.indexOf(null);
    boardsWithoutDeleteBoard.splice(index, 1);
    dispatch(deleteBoard(boardsWithoutDeleteBoard));
  };

  return (
    <Container>
      <TypographyBoardTitle variant="h3">Boards</TypographyBoardTitle>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 2, md: 3 }}>
        {boards.map((board) => {
          return (
            <BoardItem
              key={board.id}
              title={board.title}
              description={board.description}
              id={board.id}
              initModalWindow={initModalWindow}
            />
          );
        })}
        <BoardAdd />
      </Grid>
      {openModal ? (
        <ModalWindowConfirm
          isOpen={true}
          textMassage={'Вы уверненны, что хотите удалить этот Board'}
          reuseDelete={reuseDelete}
          deleteElement={deleteElement}
        />
      ) : null}
    </Container>
  );
}

export default Board;
