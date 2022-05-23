import React from 'react';
import { BoardWrap, ColumnsBox, ColumnsOverflowBox } from './Board.styled';

import { useAppSelector } from '../../store/hooks';

import Column from './columns/column/Column';
import ColumnAdd from './columns/columnAdd/ColumnAdd';

function Board() {
  const { board } = useAppSelector((state) => state.board);

  return (
    <BoardWrap>
      <ColumnsOverflowBox>
        <ColumnsBox>
          {board?.columns.map((column) => (
            <Column key={column.id} column={column} />
          ))}
          <ColumnAdd />
        </ColumnsBox>
      </ColumnsOverflowBox>
    </BoardWrap>
  );
}

export default Board;
