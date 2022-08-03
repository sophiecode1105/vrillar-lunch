import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  playing: false,
};

export const gameStatusSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeGameStatus: (state, action: PayloadAction<{ playing: boolean }>) => {
      const { playing } = action.payload;
      state.playing = playing;
    },
  },
});

export const { changeGameStatus } = gameStatusSlice.actions;
export default gameStatusSlice.reducer;
