import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Typography, CircularProgress, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { ContainerCustom, PageContentWrap } from '../../Global.styled';
import { TopBox, CircularProgressBox } from './BoardPage.styled';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getBoard, setErrorBoard } from '../../store/features/boardSlice';

import Board from '../../components/board/Board';

function BoardPage() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { board, isLoading, error } = useAppSelector((state) => state.board);

  useEffect(() => {
    const boardId = params.boardId as string;
    dispatch(getBoard({ id: boardId }));
  }, []);

  useEffect(() => {
    if (error) {
      dispatch(setErrorBoard(null));
      navigate('/boards', { replace: true });
    }
  }, [error]);

  return (
    <ContainerCustom maxWidth={false}>
      {isLoading && (
        <CircularProgressBox>
          <CircularProgress />
        </CircularProgressBox>
      )}
      {!isLoading && board && (
        <PageContentWrap>
          <TopBox>
            <Typography
              component="h1"
              sx={{
                typography: { sm: 'h3', xs: 'h4' },
              }}
            >
              {board.title}
            </Typography>
            <Button
              variant="text"
              startIcon={<ArrowBackIcon />}
              size="large"
              component={Link}
              to="/boards"
            >
              Back
            </Button>
          </TopBox>
          <Board />
        </PageContentWrap>
      )}
    </ContainerCustom>
  );
}

export default BoardPage;
