import React, { useState } from 'react';
import { TypographyBoardTitle } from './Board.styled';
import { Button, Container, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBoard, getBoards } from '../../features/BoardSlice/BoardSlice';
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
  boards: { boards: IBoard[] };
}

function Board() {
  const dispatch = useAppDispatch();
  const boards = useSelector((state: IBoardsState) => state.boards.boards);
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
    const boardsWithoutDeleteBoard = boards.map((board) => {
      return board.id !== idDeleteBoard ? board : null;
    });
    const index = boardsWithoutDeleteBoard.indexOf(null);
    boardsWithoutDeleteBoard.splice(index, 1);
    dispatch(deleteBoard(boardsWithoutDeleteBoard));
  };

  const openModalFormAddBoard = () => {
    setOpenModalAddNewBoard(true);
  };

  const createTestBoard = () => {
    dispatch(getBoards());
    // await fetch(`https://morning-lowlands-47809.herokuapp.com/boards`, {
    //   headers: {
    //     Authorization:
    //       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5OWQzMTczMy03NTE0LTQ0MzQtYTNjZC0xZjUxMTIyOTMyZWMiLCJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjUyNzM1NjA1fQ.FPhPjvKQg_Cnz6yK9e-bvsYCmUwkTWJSst4zfGV8AGo',
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   method: 'POST',
    //   body: JSON.stringify({ title: '222', description: 'sfdsdfsdfds' }),
    // })
    //   .then((response) => response.json())
    //   .then((res) => console.log(res));
    // const testBoards = await fetch('https://morning-lowlands-47809.herokuapp.com/boards', {
    //   headers: {
    //     Authorization:
    //       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5OWQzMTczMy03NTE0LTQ0MzQtYTNjZC0xZjUxMTIyOTMyZWMiLCJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjUyNzM1NjA1fQ.FPhPjvKQg_Cnz6yK9e-bvsYCmUwkTWJSst4zfGV8AGo',
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   method: 'GET',
    // })
    //   .then((response) => response.json())
    //   .then((res) => console.log(res));
    // console.log(testBoards);
  };
  return (
    <Container>
      <TypographyBoardTitle variant="h3">Boards</TypographyBoardTitle>
      <Button onClick={createTestBoard}>ffffffff</Button>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 2, md: 3 }}>
        {boards.map((board) => {
          return (
            <BoardItem
              key={Math.random()}
              title={board.title}
              description={board.description}
              id={board.id}
              initModalWindow={initModalWindowDeleteBoard}
            />
          );
        })}
        <BoardAdd openModalFormAddBoard={openModalFormAddBoard} />
      </Grid>
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
