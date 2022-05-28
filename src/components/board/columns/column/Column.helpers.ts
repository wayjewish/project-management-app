import update from 'immutability-helper';
import { IBoard, IColumn } from '../../../../api/types';

export interface IDragItemColumn {
  id: string;
  index: number;
}

interface IPropsMoveColumn {
  board: IBoard;
  dragColumn: IColumn;
  hoverColumn: IColumn;
}

export const moveColumn = (props: IPropsMoveColumn) => {
  const { board, dragColumn, hoverColumn } = props;

  let newColumns = [...board.columns];

  const dragColumnIndex = newColumns.map((column) => column.id).indexOf(dragColumn.id);
  const hoverColumnIndex = newColumns.map((column) => column.id).indexOf(hoverColumn.id);

  newColumns = update(newColumns, {
    $splice: [
      [dragColumnIndex, 1],
      [hoverColumnIndex, 0, dragColumn],
    ],
  });

  return newColumns;
};
