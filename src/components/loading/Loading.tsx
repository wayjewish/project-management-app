import React from 'react';
import { CircularProgress } from '@mui/material';
import { CircularProgressBox } from './Loading.styled';

function Loading() {
  return (
    <CircularProgressBox>
      <CircularProgress />
    </CircularProgressBox>
  );
}

export default Loading;
