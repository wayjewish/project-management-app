import React from 'react';
import { ColumnBox, ColumnContent, ButtonAddColumn } from './ColumnAdd.styled';

function Column() {
  return (
    <ColumnBox>
      <ColumnContent>
        <ButtonAddColumn variant="outlined">+ Add column</ButtonAddColumn>
      </ColumnContent>
    </ColumnBox>
  );
}

export default Column;
