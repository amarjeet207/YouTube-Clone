import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: { isMenuClicked: false },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuClicked = !state.isMenuClicked;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
