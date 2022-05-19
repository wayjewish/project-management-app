import React, { useEffect, useState } from 'react';
import { TypographyBoardTitle, CircularProgressBox } from './Board.styled';
import { Container, Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { deleteBoardById, getBoards } from '../../features/BoardSlice/BoardSlice';
import { useAppDispatch } from '../../store/hooks';
import BoardItem from './BoardItem/BoardItem';
import BoardAdd from './BoardAdd/BoardAdd';
import ModalWindowConfirm from '../../components/UI/modalWindowСonfirm/ModalWindowConfirm';
import FormNewBoard from '../../components/UI/formNewBoard/FormNewBoard';

interface IBoard {
  id: string;
  title: string;
  description: string;
}
interface IBoardsState {
  boards: { boards: IBoard[]; loading: boolean };
}

function Board() {
  const dispatch = useAppDispatch();
  const boards = useSelector((state: IBoardsState) => state.boards.boards);
  const loader = useSelector((state: IBoardsState) => state.boards.loading);
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
    dispatch(deleteBoardById(idDeleteBoard));
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
