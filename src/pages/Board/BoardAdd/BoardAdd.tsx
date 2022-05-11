import React from 'react';
import { Card, Typography } from '@mui/material';
import { CancelOutlined } from '@mui/icons-material';

function BoardAdd() {
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 255,
        height: 158,
        borderRadius: '4px',
        boxShadow:
          '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
        margin: '0 20px 20px 0',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h5">Добавить</Typography>
      <CancelOutlined
        sx={{
          width: '50px',
          height: '50px',
          transform: 'rotate(45deg)',
          color: 'rgba(0, 0, 0, 0.54)',
        }}
      />
    </Card>
  );
}

export default BoardAdd;
