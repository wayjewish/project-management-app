import React from 'react';
import { ColumnBox, ColumnContent, ButtonAddColumn } from './ColumnAdd.styled';

import { useAppDispatch } from '../../../../store/hooks';
import { changeIsOpenModalColumn } from '../../../../store/features/board/boardSlice';

function Column() {
  const dispatch = useAppDispatch();

  const handlerClick = () => {
    dispatch(changeIsOpenModalColumn({ formAdd: true }));
  };

  return (
    <ColumnBox>
      <ColumnContent>
        <ButtonAddColumn variant="outlined" onClick={handlerClick}>
          + Add column
        </ButtonAddColumn>
      </ColumnContent>
    </ColumnBox>
  );
}

export default Column;
