import React from 'react';
import { Card, Button, Typography } from '@mui/material';

function BoardItem() {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 255,
        height: 158,
        borderRadius: '4px',
        boxShadow:
          '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
        margin: '0 20px 20px 0',
        padding: '20px',
        position: 'relative',
      }}
    >
      <Typography variant="h5">Проект</Typography>
      <Button
        variant="text"
        color="error"
        sx={{ position: 'absolute', bottom: '20px', right: '20px' }}
      >
        REMOVE
      </Button>
    </Card>
  );
}

export default BoardItem;
