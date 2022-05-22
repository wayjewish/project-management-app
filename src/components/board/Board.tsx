import React from 'react';
import { BoardWrap, ColumnsBox, ColumnsOverflowBox } from './Board.styled';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import Column from './column/Column';
import ColumnAdd from './columnAdd/ColumnAdd';

function Board() {
  const dispatch = useAppDispatch();
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
