import { createSlice } from '@reduxjs/toolkit';
import { headerType } from '../types/header.types';

const initialState: headerType = {
  title: '',
  prev: '',
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    actionSetHeader: (state, action) => {
      state.title = action.payload.title;
      state.prev = action.payload.prev;
    },
  },
});

export const { actionSetHeader } = headerSlice.actions;

export default headerSlice.reducer;
