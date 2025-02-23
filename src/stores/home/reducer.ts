import { createSlice } from '@reduxjs/toolkit';

import { HomeState } from '@@stores/home/types';

const initialState: HomeState = {
  visibleMenu: true,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    toggleVisibleMenu(state) {
      state.visibleMenu = !state.visibleMenu;
    },
  },
});

export const { toggleVisibleMenu } = homeSlice.actions;

export default homeSlice.reducer;
