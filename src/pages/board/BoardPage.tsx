import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { ContainerCustom, PageContentWrap } from '../../Global.styled';
import { TopBox } from './BoardPage.styled';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getBoard, setErrorsBoard } from '../../store/features/boardSlice';

import Board from '../../components/board/Board';
import Loading from '../../components/loading/Loading';

function BoardPage() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { board, isLoading, errorsBoard } = useAppSelector((state) => state.board);

  useEffect(() => {
    const boardId = params.boardId as string;
    dispatch(getBoard({ id: boardId }));
  }, []);

  useEffect(() => {
    if (errorsBoard.get) {
      dispatch(setErrorsBoard({ get: null }));
      navigate('/boards', { replace: true });
    }
  }, [errorsBoard.get]);

  return (
    <ContainerCustom maxWidth={false}>
      {isLoading && <Loading />}
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
