import React from 'react';
import { ColumnBox, ColumnContent, ButtonAddColumn } from './ColumnAdd.styled';

import { useAppDispatch } from '../../../../store/hooks';
import { changeIsOpenModalColumns } from '../../../../store/features/columnsSlice';

import { useTranslation } from 'react-i18next';

function Column() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handlerClick = () => {
    dispatch(changeIsOpenModalColumns({ formAdd: true }));
  };

  return (
    <ColumnBox>
      <ColumnContent>
        <ButtonAddColumn variant="outlined" onClick={handlerClick}>
          + {t('button.add')}
        </ButtonAddColumn>
      </ColumnContent>
    </ColumnBox>
  );
}

export default Column;
