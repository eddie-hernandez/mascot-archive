import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cursorHover: false,
};

const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    setCursorHover: (state, action) => {
      state.cursorHover = action.payload;
    },
  },
});

export const { setCursorHover } = cursorSlice.actions;
export default cursorSlice.reducer;