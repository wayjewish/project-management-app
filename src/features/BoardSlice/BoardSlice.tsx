import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  boards: {
    id: string;
    title: string;
  }[];
} = {
  boards: [
    { id: '1', title: 'Домашняя раработа' },
    { id: '2', title: 'проект' },
    { id: '3', title: 'Покупки' },
    { id: '4', title: 'Уброрка' },
    { id: '5', title: 'Стройка' },
  ],
};

export const BoardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
});

export const {} = BoardSlice.actions;

export default BoardSlice.reducer;
