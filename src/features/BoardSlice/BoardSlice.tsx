import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  boards: {
    id: string;
    title: string;
    description: string;
  }[];
  isOpenModalConfirm: boolean;
} = {
  boards: [
    {
      id: '1',
      title: 'Домашняя раработа',
      description: 'Домашняя работа над проектои и тд и тд и тд',
    },
    { id: '2', title: 'Проект', description: 'Предстоит сделать' },
    { id: '3', title: 'Покупки', description: 'Нужно купить' },
    { id: '4', title: 'Уброрка', description: '' },
    { id: '5', title: 'Стройка', description: 'Приобрести для постройки дома' },
  ],

  isOpenModalConfirm: false,
};

export const BoardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    deleteBoard: (state, action) => {
      state.boards = action.payload;
    },
  },
});

export const { deleteBoard } = BoardSlice.actions;

export default BoardSlice.reducer;
